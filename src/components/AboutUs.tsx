import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, HeartHandshake, Award, Compass, Users } from 'lucide-react';

export default function AboutUs() {
  const team = [
    {
      name: 'Dra. Elena Ruiz',
      role: 'Socia Principal de Derecho Corporativo',
      desc: 'Doctora en Derecho Comercial con 18+ años de experiencia asesorando a juntas directivas en fusiones y blindaje estratégico.',
      avatar: 'ER'
    },
    {
      name: 'Lic. Juan Manuel Prado',
      role: 'Director de Consultoría Fiscal & Auditoría',
      desc: 'Ex-auditor gubernamental y especialista en estructuración internacional para empresas del sector fintech y logística.',
      avatar: 'JP'
    },
    {
      name: 'Mtra. Sofía Altamirano',
      role: 'Directora de Psicología Forense & Mediación',
      desc: 'Perito psicológico oficial con amplia trayectoria en psicología de apoyo en juicios complejos de alta tensión familiar.',
      avatar: 'SA'
    }
  ];

  return (
    <section id="nosotros-section" className="py-24 bg-dark-bg border-t border-dark-border/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Visual Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-gold-light bg-gold-dark/10 border border-gold-brand/20 px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase">
              <Compass size={12} />
              Nuestra Identidad
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
              Liderazgo interdisciplinario para un mundo de alta complejidad.
            </h2>
            <p className="font-sans text-sm md:text-base text-dark-text-muted leading-relaxed">
              En Clic Legal rompemos la tradicional división entre despachos legales, firmas de contabilidad y terapeutas. Entendemos que los desafíos de un negocio o de una reestructuración patrimonial no ocurren de forma aislada: requieren la máxima precisión numérica, un sólido blindaje legal y un acompañamiento humano que cuide la salud mental de los involucrados.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-2 border-gold-brand pl-4">
                <span className="block text-2xl font-bold font-display text-white">150+</span>
                <span className="text-[10px] text-dark-text-muted uppercase tracking-wider">Fusiones Blindadas</span>
              </div>
              <div className="border-l-2 border-gold-brand pl-4">
                <span className="block text-2xl font-bold font-display text-white">$100M+</span>
                <span className="text-[10px] text-dark-text-muted uppercase tracking-wider">Activos Protegidos</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="aspect-video w-full rounded-3xl overflow-hidden border border-dark-border/60 relative">
              <img
                src="/img/nosotros.jpg"
                alt="Oficinas Clic Legal"
                className="w-full h-full object-cover filter grayscale contrast-115 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
            </div>
            {/* Ambient decorative shadow */}
            <div className="absolute -inset-1 bg-gold-brand/5 rounded-3xl blur-xl z-[-1] pointer-events-none" />
          </div>
        </div>

        {/* Core Values Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <Target className="text-gold-light" size={22} />,
              title: 'Precisión Técnica',
              desc: 'No caben aproximaciones. Trabajamos bajo un sistema científico estructurado de revisión cruzada de tres niveles.'
            },
            {
              icon: <Shield className="text-gold-light" size={22} />,
              title: 'Autoridad Legal',
              desc: 'Respaldados por más de 15 años de liderazgo con un profundo entendimiento de los cambios regulatorios de 2026.'
            },
            {
              icon: <HeartHandshake className="text-gold-light" size={22} />,
              title: 'Empatía Humana',
              desc: 'Los litigios y auditorías estresan. Protegemos su patrimonio mientras resguardamos activamente su paz mental.'
            }
          ].map((v, i) => (
            <div key={i} className="p-6 bg-dark-card border border-dark-border/40 rounded-3xl space-y-4">
              <div className="w-11 h-11 bg-gold-dark/20 border border-gold-brand/20 flex items-center justify-center rounded-2xl">
                {v.icon}
              </div>
              <h4 className="font-display text-base font-bold text-white">{v.title}</h4>
              <p className="font-sans text-xs md:text-sm text-dark-text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Meet the Partners */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-white flex items-center justify-center gap-2">
              <Users size={20} className="text-gold-brand" />
              Nuestros Socios Directores
            </h3>
            <p className="font-sans text-xs md:text-sm text-dark-text-muted mt-2 max-w-md mx-auto">
              Un equipo interdisciplinario que comparte un mismo estándar de excelencia y confidencialidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="p-6 bg-dark-card border border-dark-border/40 hover:border-gold-brand/30 rounded-3xl flex flex-col items-center text-center space-y-4 group transition-all"
              >
                {/* Visual Avatar frame */}
                <div className="w-16 h-16 rounded-full bg-gold-dark/10 border-2 border-gold-brand/30 flex items-center justify-center text-gold-light text-lg font-bold font-display group-hover:border-gold-brand group-hover:bg-gold-dark/20 transition-all">
                  {member.avatar}
                </div>
                <div className="space-y-1">
                  <h5 className="font-display text-sm font-bold text-white group-hover:text-gold-light transition-colors">{member.name}</h5>
                  <p className="font-mono text-[9px] text-gold-brand tracking-wider uppercase font-semibold">{member.role}</p>
                </div>
                <p className="font-sans text-xs text-dark-text-muted leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
