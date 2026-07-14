import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export default function Hero({ onPrimaryClick, onSecondaryClick }: HeroProps) {
  const images = ['/home.jpeg', '/home2.jpeg', '/contable2.jpeg'];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-dark-bg"
    >
      {/* Background Statue Image with Dark Overlays */}
      <div className="absolute inset-0 z-0 bg-dark-bg">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            src={images[currentImage]}
            alt="Firma Legal y Contable"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Soft amber/gold gradient to let the image show more while remaining elegant */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,124,99,0.15)_0%,transparent_80%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-16 pb-16">
        
        {/* Main Header */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.1] md:leading-[1.12]"
        >
          Transformamos la confusión en{' '}
          <span className="text-gold-light bg-gradient-to-r from-gold-light via-white/90 to-gold-light bg-clip-text text-transparent">
            estrategia
          </span>
          . La asesoría profesional que necesitas, a{' '}
          <span className="text-gold-light block mt-2 relative inline-block">
            un solo clic de distancia.
            <span className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-transparent via-gold-brand/40 to-transparent" />
          </span>
        </motion.h1>

        {/* Secondary Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-base md:text-lg text-dark-text-muted max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Estamos aquí para cambiar el miedo con soluciones precisas y un enfoque humano de alta confidencialidad.
        </motion.p>

        {/* Actions Button Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            id="hero-primary-action"
            onClick={onPrimaryClick}
            className="w-full sm:w-auto bg-gold-brand hover:bg-gold-light text-dark-bg font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-gold-brand/10 hover:shadow-xl hover:shadow-gold-brand/30 cursor-pointer"
          >
            Contáctanos
          </button>
          
          <button
            id="hero-secondary-action"
            onClick={onSecondaryClick}
            className="w-full sm:w-auto bg-transparent border border-gold-brand/30 hover:border-gold-brand text-gold-light hover:text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 bg-white/[0.01] hover:bg-white/[0.04] cursor-pointer"
          >
            Nuestra firma
          </button>
        </motion.div>
      </div>

      {/* Down arrow anchor */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={onSecondaryClick}
          className="text-gold-brand/60 hover:text-gold-light transition-colors cursor-pointer"
          aria-label="Ver secciones"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
}
