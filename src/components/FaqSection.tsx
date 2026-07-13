import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleIdx = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-24 bg-dark-bg border-t border-dark-border/20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-gold-light bg-gold-dark/10 border border-gold-brand/20 px-3 py-1 rounded-2xl-sm text-[10px] font-bold tracking-widest uppercase mb-3">
            <HelpCircle size={12} />
            Dudas Frecuentes
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Preguntas y Respuestas de Precisión
          </h2>
          <p className="font-sans text-dark-text-muted text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Descubra cómo coordinamos nuestras tres disciplinas para asegurar el máximo rigor y resguardo en su caso.
          </p>
        </div>

        {/* Collapsible Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-dark-card border border-dark-border/40 rounded-2xl transition-all"
              >
                {/* Header Title trigger */}
                <button
                  onClick={() => toggleIdx(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-display text-sm md:text-base font-bold text-white pr-4 hover:text-gold-light transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span className="text-gold-light shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>

                {/* Collapsible Answer Body */}
                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 pt-0 border-t border-dark-border/10 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="font-sans text-xs md:text-sm text-dark-text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support block */}
        <div className="mt-12 text-center p-6 bg-gold-dark/5 border border-gold-brand/20 rounded-2xl">
          <p className="font-sans text-xs text-dark-text-muted leading-relaxed">
            ¿Tiene una duda específica sobre su caso mercantil o familiar?{' '}
            <a
              href="#contacto-section"
              className="text-gold-light font-bold underline hover:text-white transition-colors"
            >
              Consulte de forma directa a un socio aquí
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
