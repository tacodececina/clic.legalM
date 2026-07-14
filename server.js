// Servidor de producción de Clic Legal.
// Sirve el build estático de Vite (dist/) y expone el endpoint de captura de
// leads que la Fase 2 conectará a los formularios (hoy simulados en el front).
// Corre detrás del nginx del host, que ya enruta /agente -> app Python (:8500),
// así que aquí sólo llega el tráfico de la raíz del sitio.

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3012;
const DIST = path.join(__dirname, 'dist');
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.jsonl');

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1); // detrás del nginx del host: X-Forwarded-For/Proto reales
app.use(express.json({ limit: '32kb' }));

// Healthcheck para el HEALTHCHECK de Docker / compose.
app.get('/healthz', (_req, res) => res.status(200).json({ ok: true }));

// --- Captura de leads (infra lista para Fase 2) -----------------------------
// Persiste cada prospecto como una línea JSON en un archivo bind-montado, para
// que nada se pierda aunque todavía no haya CRM/correo. La POLÍTICA de qué hacer
// con el lead (notificar por correo, validación estricta, anti-spam) es una
// decisión de negocio de la Fase 2; aquí queda el mínimo que no pierde datos.
const isEmail = (s) => typeof s === 'string' && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);

app.post('/api/lead', async (req, res) => {
  const { name, email, phone, message, source } = req.body || {};
  if (!name || !isEmail(email)) {
    return res.status(400).json({ ok: false, error: 'name y email válido son obligatorios' });
  }
  const lead = {
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    phone: phone ? String(phone).slice(0, 40) : null,
    message: message ? String(message).slice(0, 4000) : null,
    source: source ? String(source).slice(0, 80) : 'web',
    ip: req.ip,
    // sin Date.now() en tiempo de ejecución del server real está bien; el server
    // Node sí tiene reloj de sistema disponible en producción:
    ts: new Date().toISOString(),
  };
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.appendFile(LEADS_FILE, JSON.stringify(lead) + '\n', 'utf8');
    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error('[lead] no se pudo persistir:', err);
    return res.status(500).json({ ok: false, error: 'error interno' });
  }
});

// --- Estáticos + fallback SPA ------------------------------------------------
// Assets con hash de Vite -> cache larga inmutable; index.html -> sin cache.
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

// Cualquier ruta no-API y no-archivo devuelve el index (SPA de una sola página).
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(DIST, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Clic Legal escuchando en :${PORT} (dist=${DIST})`);
});
