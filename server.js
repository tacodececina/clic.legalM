// Servidor de producción de Clic Legal.
// Sirve el build estático de Vite (dist/) y expone /api/lead: persiste cada
// prospecto y avisa por correo al buzón del área correspondiente.
// Corre detrás del nginx del host, que enruta /agente -> app Python (:8500),
// así que aquí sólo llega el tráfico de la raíz del sitio.

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3012;
const DIST = path.join(__dirname, 'dist');
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.jsonl');

// --- Correo -----------------------------------------------------------------
// El VPS hospeda clic.legal en su propio Postfix, así que entregamos a los
// buzones locales sin autenticación (sólo hace falta alcanzar el puerto 25 del
// host vía host.docker.internal). No es relay externo, es entrega local.
const LEAD_FROM = process.env.LEAD_FROM || 'noreply@clic.legal';
const LEAD_FALLBACK = process.env.LEAD_FALLBACK || 'hola@clic.legal';

// Ruteo por categoría -> buzón del área. Ajustable sin tocar el front.
const MAILBOXES = {
  legal: 'juridico@clic.legal',
  contable: 'contabilidad@clic.legal',
  psicologia: 'psicologia@clic.legal',
  prensa: LEAD_FALLBACK,
  integral: LEAD_FALLBACK,
};

const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'host.docker.internal',
  port: Number(process.env.SMTP_PORT || 25),
  secure: false,
  ignoreTLS: true, // tráfico host-local en :25, sin STARTTLS
  // Si el MTA no responde, no colgamos la petición del lead (ya está en disco).
  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 8000,
});

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1); // detrás del nginx del host: X-Forwarded-For/Proto reales
app.use(express.json({ limit: '32kb' }));

app.get('/healthz', (_req, res) => res.status(200).json({ ok: true }));

const isEmail = (s) => typeof s === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
const clean = (v, max) => (v == null ? null : String(v).slice(0, max));

function ticketId(category) {
  const cat = String(category || 'gen').substring(0, 3).toUpperCase();
  const rnd = Math.floor(1000 + Math.random() * 9000);
  return `CL-${cat}-${rnd}`;
}

async function notify(lead) {
  const to = MAILBOXES[lead.category] || LEAD_FALLBACK;
  const lines = [
    `Nuevo prospecto desde clic.legal`,
    `Ticket: ${lead.id}`,
    ``,
    `Nombre:   ${lead.name}`,
    `Correo:   ${lead.email || '—'}`,
    `Teléfono: ${lead.phone || '—'}`,
    `Servicio: ${lead.service || '—'}`,
    lead.company ? `Empresa:  ${lead.company}` : null,
    lead.needs && lead.needs.length ? `Áreas:    ${lead.needs.join(', ')}` : null,
    `Origen:   ${lead.source}`,
    ``,
    `Mensaje:`,
    lead.message || '(sin mensaje)',
  ].filter((l) => l !== null);
  await mailer.sendMail({
    from: `Clic Legal Web <${LEAD_FROM}>`,
    to,
    replyTo: isEmail(lead.email) ? lead.email : undefined,
    subject: `[Lead ${lead.id}] ${lead.name} — ${lead.service || lead.category}`,
    text: lines.join('\n'),
  });
  return to;
}

app.post('/api/lead', async (req, res) => {
  const b = req.body || {};

  // Honeypot: bots rellenan campos ocultos. Aceptamos en silencio y descartamos.
  if (b.company_website) return res.status(200).json({ ok: true });

  const name = clean(b.name, 200);
  const email = isEmail(b.email) ? clean(b.email, 200) : null;
  const phone = clean(b.phone, 40);
  // name + al menos un medio de contacto (correo válido o teléfono)
  if (!name || (!email && !phone)) {
    return res.status(400).json({ ok: false, error: 'Falta el nombre o un medio de contacto (correo o teléfono).' });
  }

  const lead = {
    id: ticketId(b.category),
    name,
    email,
    phone,
    category: clean(b.category, 40) || 'general',
    service: clean(b.service, 120),
    company: clean(b.company, 200),
    needs: Array.isArray(b.needs) ? b.needs.map((n) => clean(n, 80)).slice(0, 20) : null,
    message: clean(b.message, 4000),
    source: clean(b.source, 80) || 'web',
    ip: req.ip,
    ts: new Date().toISOString(),
  };

  // 1) Persistir es la fuente de verdad: si esto falla, es un 500 real.
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.appendFile(LEADS_FILE, JSON.stringify(lead) + '\n', 'utf8');
  } catch (err) {
    console.error('[lead] no se pudo persistir:', err);
    return res.status(500).json({ ok: false, error: 'error interno' });
  }

  // 2) Avisar por correo es best-effort: si falla, el lead NO se pierde
  //    (quedó en disco) y respondemos ok igual.
  let notified = false;
  try {
    const to = await notify(lead);
    notified = true;
    console.log(`[lead] ${lead.id} guardado y notificado a ${to}`);
  } catch (err) {
    console.error(`[lead] ${lead.id} guardado pero el correo falló:`, err.message);
  }

  return res.status(201).json({ ok: true, id: lead.id, notified });
});

// --- Estáticos + fallback SPA ------------------------------------------------
app.use(
  express.static(DIST, {
    index: false,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      } else if (/\/assets\//.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    },
  })
);

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(DIST, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Clic Legal escuchando en :${PORT} (dist=${DIST})`);
});
