import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileSpreadsheet, Percent, CheckCircle, Clock } from 'lucide-react';
import { PILLARS } from '../data';
import ContactForm from './ContactForm';

export default function PageContable() {
  const contableData = PILLARS.find(p => p.id === 'contable')!;
  
  // Formulario manejado por ContactForm.tsx

  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-dark-text pb-20">
      
      {/* Banner de Categoría */}
      <div className="relative py-20 overflow-hidden border-b border-dark-border/20">
        <div className="absolute inset-0 z-0">
          <img
            src="/contable2.jpeg"
            alt="Área Contable y Fiscal"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="space-y-4 max-w-3xl">
            <span className="font-mono text-xs font-bold tracking-widest text-gold-brand uppercase">
              GESTIÓN TRIBUTARIA Y AUDITORÍA
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none">
              {contableData.name}
            </h1>
            <p className="font-sans text-sm md:text-base text-dark-text-muted leading-relaxed">
              {contableData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Grid de Servicios */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-6 mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white border-b border-gold-brand/20 pb-4">
            Estrategias Tributarias y Auditoría
          </h2>
          <p className="font-sans text-xs md:text-sm text-dark-text-muted max-w-2xl">
            Transformamos sus estados contables y sus obligaciones con Hacienda en ventajas estratégicas reales y legalmente optimizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contableData.services.map((srv) => (
            <div
              key={srv.id}
              className="p-8 bg-dark-card/40 backdrop-blur-md border border-dark-border/40 rounded-2xl flex flex-col hover:border-gold-brand/40 transition-all duration-300 shadow-lg group"
            >
              <div className="w-14 h-14 bg-gold-dark/20 text-gold-brand rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {srv.icon === 'FileSpreadsheet' && <FileSpreadsheet size={24} />}
                {srv.icon === 'Percent' && <Percent size={24} />}
                {srv.icon === 'CheckCircle' && <CheckCircle size={24} />}
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-gold-light transition-colors">
                {srv.title}
              </h3>
              <p className="font-sans text-sm text-dark-text-muted leading-relaxed mb-6">
                {srv.longDescription}
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 mt-auto pt-4 border-t border-dark-border/20 text-xs text-dark-text-muted font-sans">
                {srv.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold-brand mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>



      {/* Formulario de Contacto Categoría */}
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <ContactForm category="contable" />
      </div>

    </div>
  );
}
