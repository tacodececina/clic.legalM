// Punto único de verdad para el contacto por WhatsApp Business.
// Formato wa.me: código de país + número, sin signos ni espacios.
export const WHATSAPP_NUMBER = '527773880263';

// Número tal como se muestra a la persona usuaria.
export const WHATSAPP_DISPLAY = '+52 777 388 0263';

const WHATSAPP_MESSAGE = 'Hola, me gustaría recibir asesoría de Clic Legal';

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
