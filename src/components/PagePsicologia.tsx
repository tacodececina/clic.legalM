import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartHandshake, Video, Users, Stethoscope, BookOpen } from 'lucide-react';
import ContactForm from './ContactForm';

export default function PagePsicologia() {
  
  // Formulario manejado por ContactForm.tsx

  const services = [
    {
      icon: <HeartHandshake size={24} />,
      title: 'Orientación Psicológica y asesorías',
      desc: 'Acompañamos a las personas en la comprensión de sus procesos emocionales y en la toma de decisiones. Ofrecemos un espacio de escucha profesional, ética y confidencial, orientado a identificar necesidades y canalizar hacia soluciones adecuadas.'
    },
    {
      icon: <Users size={24} />,
      title: 'Terapia Psicológica',
      desc: 'Atención individual, familiar y de pareja. Atención y acompañamiento a infancias, adolescencias, personas adultas y adultas mayores, desde un enfoque centrado en el bienestar emocional.'
    },
    {
      icon: <Stethoscope size={24} />,
      title: 'Dictámenes y evaluación psicológica',
      desc: 'Elaboración de evaluaciones, informes y dictámenes periciales en ámbitos legales, educativos, laborales y clínicos. Orientación vocacional basada en el análisis de habilidades, intereses y proyecto de vida.'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Talleres y Capacitación',
      desc: 'Impartición de conferencias, seminarios, talleres y cursos dirigidos a instituciones educativas, laborales y sociales. Nuestros programas integran perspectiva de género y enfoque en derechos de niñas, niños y adolescentes.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-dark-text pb-20">
      
      {/* Banner de Categoría */}
      <div className="relative py-24 overflow-hidden border-b border-dark-border/20">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/oficina.jpg"
            alt="Área de Psicología"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="font-mono text-xs font-bold tracking-widest text-gold-brand uppercase mb-4 block">
            Apoyo Emocional y Pericial
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-6">
            Área de Psicología
          </h1>
          <p className="font-sans text-sm md:text-base text-dark-text-muted leading-relaxed max-w-3xl mx-auto">
            Un espacio seguro y profesional para el bienestar emocional integral.
          </p>
        </div>
      </div>

      {/* Servicios */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((srv, idx) => (
            <div key={idx} className="p-8 bg-dark-card/40 backdrop-blur-md border border-dark-border/40 rounded-2xl flex flex-col hover:border-gold-brand/40 transition-all duration-300 shadow-lg group">
              <div className="w-14 h-14 bg-gold-dark/20 text-gold-brand rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4 group-hover:text-gold-light transition-colors">{srv.title}</h3>
              <p className="font-sans text-sm text-dark-text-muted leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>

        {/* Modalidad de atención */}
        <div className="bg-gold-dark/10 backdrop-blur-md border border-gold-brand/20 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gold-brand text-dark-bg rounded-full flex items-center justify-center shrink-0">
              <Video size={24} />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">Modalidad de atención</h4>
              <p className="font-sans text-sm text-dark-text-muted">Todos nuestros servicios se ofrecen en modalidad presencial, en línea o híbrida, adaptándonos a las necesidades de cada persona o institución.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de Contacto Categoría */}
      <div className="max-w-4xl mx-auto px-6 pt-10">
        <ContactForm category="psicologia" />
      </div>

    </div>
  );
}
