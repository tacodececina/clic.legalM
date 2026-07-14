import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, Scale, Award, FileSpreadsheet, Percent, HeartHandshake, Briefcase, Calendar, CheckSquare, Clock } from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onSelectForConsultation: (serviceTitle: string) => void;
}

export default function ServiceModal({ service, onClose, onSelectForConsultation }: ServiceModalProps) {
  if (!service) return null;

  // Icon mapping helper
  const renderIcon = (iconName: string) => {
    const iconProps = { size: 28, className: 'text-gold-light' };
    switch (iconName) {
      case 'Shield': return <Shield {...iconProps} />;
      case 'Scale': return <Scale {...iconProps} />;
      case 'Award': return <Award {...iconProps} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...iconProps} />;
      case 'Percent': return <Percent {...iconProps} />;
      case 'HeartHandshake': return <HeartHandshake {...iconProps} />;
      case 'Briefcase': return <Briefcase {...iconProps} />;
      default: return <Shield {...iconProps} />;
    }
  };

  const handleActionClick = () => {
    onSelectForConsultation(service.title);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-end">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black backdrop-blur-sm"
        />

        {/* Sliding Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-xl bg-dark-card border-l border-dark-border h-screen shadow-2xl flex flex-col justify-between overflow-y-auto z-10 p-8 md:p-10"
        >
          {/* Top Panel Actions */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold-dark/20 border border-gold-brand/20 flex items-center justify-center">
                  {renderIcon(service.icon)}
                </div>
                <div>
                  <span className="font-mono text-[9px] font-bold text-gold-light tracking-widest uppercase">
                    Ficha de Servicio
                  </span>
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                    Asesoría de Precisión
                  </h4>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-dark-border hover:border-gold-brand/40 flex items-center justify-center text-dark-text-muted hover:text-white transition-all cursor-pointer"
                aria-label="Cerrar ficha"
              >
                <X size={18} />
              </button>
            </div>

            {/* Core Service Content */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-white leading-snug">
                  {service.title}
                </h3>
                <div className="w-12 h-1 bg-gold-brand rounded-2xl mt-4" />
              </div>

              {/* Narrative description */}
              <div className="prose prose-invert max-w-none">
                <p className="font-sans text-sm md:text-base text-dark-text-muted leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Specifications Block: Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-dark-bg/60 border border-dark-border/40 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-gold-light" />
                  <div>
                    <p className="text-[10px] text-gold-muted font-bold uppercase tracking-wider">Tiempo Estimado</p>
                    <p className="text-xs text-white font-medium">{service.estimatedTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-gold-light" />
                  <div>
                    <p className="text-[10px] text-gold-muted font-bold uppercase tracking-wider">Metodología</p>
                    <p className="text-xs text-white font-medium">Bajo Rigor de 3 Niveles</p>
                  </div>
                </div>
              </div>

              {/* Detailed scope bullets */}
              <div className="space-y-3">
                <h5 className="font-display text-xs font-bold tracking-wider text-gold-light uppercase">
                  Ámbito de Intervención Detallado
                </h5>
                <ul className="space-y-2.5">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-dark-text-muted font-sans">
                      <CheckSquare size={13} className="text-gold-brand shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action deliverables */}
              <div className="space-y-3">
                <h5 className="font-display text-xs font-bold tracking-wider text-gold-light uppercase">
                  Entregables Garantizados
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-dark-bg/40 border border-dark-border/30 rounded-2xl text-xs font-semibold text-white font-sans flex items-center gap-2.5"
                    >
                      <div className="w-1.5 h-1.5 bg-gold-brand rounded-full shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="pt-8 border-t border-dark-border/20 mt-12">
            <button
              onClick={handleActionClick}
              className="w-full bg-gold-brand hover:bg-gold-light text-dark-bg font-sans font-bold text-xs uppercase tracking-widest py-4 rounded-2xl transition-all duration-300 shadow-md shadow-gold-brand/10 hover:shadow-gold-brand/20 cursor-pointer text-center block"
            >
              Solicitar esta práctica en mi Evaluación
            </button>
            <p className="text-[10px] text-center text-dark-text-muted mt-2.5 font-sans">
              *La consulta inicial de diagnóstico es confidencial y sin coste.
            </p>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
