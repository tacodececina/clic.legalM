// Cliente único para la captación de prospectos. Todos los formularios del sitio
// envían a través de aquí, así el endpoint, el manejo de errores y la forma del
// payload viven en un solo lugar.

export interface LeadPayload {
  name: string;
  email?: string;
  phone?: string;
  category?: 'legal' | 'contable' | 'psicologia' | 'prensa' | 'integral' | 'general';
  service?: string;
  company?: string;
  needs?: string[];
  message?: string;
  source: string;
  /** Honeypot anti-bots: debe ir siempre vacío (campo oculto en el form). */
  company_website?: string;
}

export interface LeadResult {
  ok: boolean;
  /** ID de ticket devuelto por el servidor (p.ej. CL-LEG-4821). */
  id?: string;
  error?: string;
}

/** Envía un prospecto a /api/lead. Nunca lanza: siempre resuelve un LeadResult. */
export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as LeadResult;
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error || 'No se pudo enviar tu solicitud. Intenta de nuevo.' };
    }
    return { ok: true, id: data.id };
  } catch {
    return { ok: false, error: 'Sin conexión con el servidor. Verifica tu red e intenta de nuevo.' };
  }
}
