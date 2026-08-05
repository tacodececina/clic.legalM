import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_HREF } from '../lib/whatsapp';

// Botón flotante de WhatsApp Business.
// Vive a la izquierda del botón "regresar arriba" (que ocupa right-6 / w-11),
// por lo que right-20 deja holgura y nunca lo tapa.
// Solo desktop (lg+): en móvil el acceso equivalente está en el Footer.
export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group hidden lg:grid place-items-center fixed bottom-6 right-20 z-50 w-11 h-11 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:scale-110 hover:bg-[#20BA5A] hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
    >
      {/* Halo de atención: se detiene al pasar el cursor y respeta
          prefers-reduced-motion para no resultar intrusivo. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:hidden motion-reduce:hidden"
      />

      <WhatsAppIcon className="relative w-6 h-6" />

      {/* Tooltip al hover, en la paleta oscura del sitio. */}
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-2xl border border-dark-border/60 bg-dark-card px-3 py-1.5 font-sans text-xs text-dark-text shadow-lg opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
      >
        Escríbenos por WhatsApp
      </span>
    </a>
  );
}
