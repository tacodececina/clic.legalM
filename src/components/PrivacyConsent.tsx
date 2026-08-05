import React from 'react';
import { Check } from 'lucide-react';

interface PrivacyConsentProps {
  checked: boolean;
  onChange: (accepted: boolean) => void;
  /** Marca el control en rojo cuando se intentó enviar sin aceptar. */
  invalid?: boolean;
  /** Debe ser único por formulario montado en la misma página. */
  id: string;
}

// Consentimiento obligatorio de privacidad, compartido por los formularios de
// contacto (home y por área) para que copy y estilo no se dupliquen.
export default function PrivacyConsent({ checked, onChange, invalid = false, id }: PrivacyConsentProps) {
  return (
    <label htmlFor={id} className="group flex items-start gap-3 cursor-pointer select-none">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-invalid={invalid}
        className="peer sr-only"
      />

      {/* Caja visual: el input real queda accesible pero oculto. */}
      <span
        aria-hidden="true"
        className={`mt-0.5 grid place-items-center w-[18px] h-[18px] shrink-0 rounded-md border bg-dark-bg/60 text-dark-bg transition-all peer-checked:bg-gold-brand peer-checked:border-gold-brand peer-focus-visible:ring-2 peer-focus-visible:ring-gold-light/60 ${
          invalid ? 'border-red-400/70' : 'border-dark-border/80 group-hover:border-gold-brand/60'
        }`}
      >
        {checked && <Check size={12} strokeWidth={3} />}
      </span>

      <span className="font-sans text-xs leading-relaxed text-dark-text-muted">
        He leído y acepto el{' '}
        <a
          href="/privacidad"
          target="_blank"
          rel="noopener noreferrer"
          // Evita que al abrir el aviso se alterne la casilla vía el <label>.
          onClick={(e) => e.stopPropagation()}
          className="text-gold-light underline underline-offset-2 hover:text-white transition-colors"
        >
          Aviso de Privacidad
        </a>
        .
      </span>
    </label>
  );
}
