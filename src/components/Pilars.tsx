import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, FileSpreadsheet, Percent, Scale, Brain } from 'lucide-react';
import { PILLARS } from '../data';
import { Pillar, Service } from '../types';

interface PilarsProps {
  onSelectService: (serviceId: string) => void;
  onSelectPillar: (pillarId: 'legal' | 'contable' | 'psicologia') => void;
}

export default function Pilars({ onSelectService, onSelectPillar }: PilarsProps) {
  // Find individual pillars from static data to build exact structures
  const legalPillar = PILLARS.find(p => p.id === 'legal')!;
  const contablePillar = PILLARS.find(p => p.id === 'contable')!;
  const psicologiaPillar = PILLARS.find(p => p.id === 'psicologia')!;

  return (
    <section id="pilares-section" className="py-24 bg-dark-bg border-t border-dark-border/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Nuestros Pilares
          </h2>
          <p className="font-sans text-dark-text-muted max-w-xl text-sm md:text-base leading-relaxed">
            Un ecosistema interdisciplinario diseñado para proteger sus intereses desde todos los ángulos necesarios.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Card 1: ÁREA LEGAL */}
          <motion.div
            id="pillar-card-legal"
            whileHover={{ y: -6, borderColor: 'rgba(148,124,99,0.5)' }}
            transition={{ duration: 0.3 }}
            className="relative bg-dark-card border border-dark-border/60 p-8 rounded-3xl overflow-hidden flex flex-col justify-between min-h-[400px]"
          >
            {/* Background geometric watermark scale */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.03] text-gold-light pointer-events-none">
              <Scale size={260} strokeWidth={0.5} />
            </div>

            <div>
              {/* Tag */}
              <span className="inline-block bg-gold-dark/20 text-gold-light text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-lg mb-6 border border-gold-brand/20">
                ÁREA LEGAL
              </span>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                {legalPillar.tagline}
              </h3>

              {/* Bullets List */}
              <div className="space-y-4">
                {legalPillar.services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => onSelectService(service.id)}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-2xl bg-gold-dark/20 border border-gold-brand/30 flex items-center justify-center text-gold-light mt-0.5 group-hover:bg-gold-brand group-hover:text-dark-bg transition-all">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="font-sans text-sm text-dark-text-muted group-hover:text-white transition-colors">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Link */}
            <div className="mt-8 pt-4 border-t border-dark-border/20">
              <button
                onClick={() => onSelectPillar('legal')}
                className="inline-flex items-center gap-2 text-gold-light font-sans font-bold text-xs uppercase tracking-widest group cursor-pointer"
              >
                <span>Explorar servicios legales</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: CONTABILIDAD */}
          <motion.div
            id="pillar-card-contable"
            whileHover={{ y: -6, borderColor: 'rgba(148,124,99,0.5)' }}
            transition={{ duration: 0.3 }}
            className="relative bg-dark-card border border-dark-border/60 p-8 rounded-3xl overflow-hidden flex flex-col justify-between min-h-[400px]"
          >
            <div>
              {/* Tag */}
              <span className="inline-block bg-gold-dark/20 text-gold-light text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-lg mb-6 border border-gold-brand/20">
                CONTABILIDAD
              </span>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                {contablePillar.tagline}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-dark-text-muted mb-8 leading-relaxed max-w-md">
                {contablePillar.description}
              </p>

              {/* Interactive structured rows for Auditorías and Optimización */}
              <div className="space-y-3">
                {contablePillar.services.map((service, index) => {
                  const isAudit = service.id === 'auditorias-fin';
                  return (
                    <div
                      key={service.id}
                      onClick={() => onSelectService(service.id)}
                      className="flex items-center justify-between p-4 bg-dark-bg/60 border border-dark-border/40 rounded-2xl hover:border-gold-brand/30 hover:bg-gold-dark/5 transition-all duration-300 cursor-pointer group"
                    >
                      <span className="font-sans text-sm font-semibold text-dark-text group-hover:text-gold-light transition-colors">
                        {service.title}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-gold-dark/10 border border-gold-brand/10 flex items-center justify-center text-gold-light group-hover:border-gold-brand group-hover:bg-gold-brand group-hover:text-dark-bg transition-all">
                        {isAudit ? <FileSpreadsheet size={14} /> : <Percent size={14} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Link */}
            <div className="mt-8 pt-4 border-t border-dark-border/20">
              <button
                onClick={() => onSelectPillar('contable')}
                className="inline-flex items-center gap-2 text-gold-light font-sans font-bold text-xs uppercase tracking-widest group cursor-pointer"
              >
                <span>Explorar servicios financieros</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Card 3: PSICOLOGÍA (Spans full width in a beautiful landscape block) */}
        <motion.div
          id="pillar-card-psicologia"
          whileHover={{ y: -4, borderColor: 'rgba(148,124,99,0.5)' }}
          transition={{ duration: 0.3 }}
          className="bg-dark-card border border-dark-border/60 rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Image Column */}
            <div className="md:col-span-5 h-64 md:h-auto min-h-[300px] relative">
              <img
                src="/img/psicologia-apoyo.jpg"
                alt="Psicología de Apoyo"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-110 brightness-90 hover:scale-105 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark-card/90 via-transparent to-transparent" />
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                {/* Tag */}
                <span className="inline-block bg-gold-dark/20 text-gold-light text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-lg mb-6 border border-gold-brand/20">
                  PSICOLOGÍA
                </span>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-white mb-6">
                  {psicologiaPillar.tagline}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm md:text-base text-dark-text-muted leading-relaxed mb-6">
                  Entendemos que los procesos legales y financieros generan una carga emocional significativa. Nuestro equipo de psicología ofrece soporte especializado para mantener el equilibrio durante la toma de decisiones complejas.
                </p>

                {/* Interactive Services under Psychology */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {psicologiaPillar.services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => onSelectService(service.id)}
                      className="px-3 py-1.5 bg-dark-bg/40 border border-dark-border/40 rounded-2xl text-xs font-semibold text-dark-text-muted hover:border-gold-brand/40 hover:text-gold-light transition-all cursor-pointer"
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-dark-border/20">
                <button
                  onClick={() => onSelectPillar('psicologia')}
                  className="inline-flex items-center gap-2 text-gold-light font-sans font-bold text-xs uppercase tracking-widest group cursor-pointer"
                >
                  <span>Agendar sesión de apoyo</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
