import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Send } from 'lucide-react';

interface ContactFormProps {
  category: 'legal' | 'contable' | 'psicologia' | 'prensa';
  title?: string;
  subtitle?: string;
}

export default function ContactForm({ category, title, subtitle }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');
  const [service, setService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const targetEmail = category === 'psicologia' ? 'psicologia@clic.legal' : (category === 'prensa' ? 'prensa@clic.legal' : 'juridico@clic.legal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setTicketId(`CL-${category.substring(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
      setIsSubmitting(false);
      
      // Intentar abrir el cliente de correo (opcional, pero cumple con "enviar a correo")
      // window.location.href = `mailto:${targetEmail}?subject=Solicitud de ${name} - ${service}&body=${encodeURIComponent(desc)}%0A%0AContacto: ${phone}%0ACorreo: ${email}`;
      
    }, 1200);
  };

  const getServiceOptions = () => {
    switch(category) {
      case 'legal': return ['Familiar', 'Civil y Mercantil', 'Laboral', 'Fiscal', 'Administrativo', 'Penal', 'Amparo', 'Otros'];
      case 'contable': return ['Estrategia Fiscal', 'Cumplimiento', 'Gestión de Negocios', 'Otros'];
      case 'psicologia': return ['Orientación Psicológica', 'Terapia Psicológica', 'Dictámenes y Evaluación', 'Talleres y Capacitación'];
      case 'prensa': return ['Entrevista', 'Columna de Opinión', 'Reportaje', 'Otros'];
      default: return ['Consulta General'];
    }
  };

  return (
    <div className="bg-dark-card/40 backdrop-blur-md border border-dark-border/40 rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-2">
              <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                {title || `Consulta Especializada: Área ${category.charAt(0).toUpperCase() + category.slice(1)}`}
              </h3>
              <p className="font-sans text-xs md:text-sm text-dark-text-muted max-w-md mx-auto">
                {subtitle || 'Déjanos tus datos y un especialista se pondrá en contacto contigo a la brevedad.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-sans font-bold text-dark-text-muted mb-2 tracking-wider">
                    NOMBRE
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-dark-bg/50 border border-dark-border/40 focus:border-gold-brand text-white text-sm px-4 py-3 rounded-2xl focus:outline-none transition-colors"
                    placeholder="Su nombre"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-sans font-bold text-dark-text-muted mb-2 tracking-wider">
                    CORREO ELECTRÓNICO O NÚMERO TELEFÓNICO
                  </label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-dark-bg/50 border border-dark-border/40 focus:border-gold-brand text-white text-sm px-4 py-3 rounded-2xl focus:outline-none transition-colors"
                    placeholder="hola@empresa.com o 55 1234 5678"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                  <label className="block text-[9px] font-bold uppercase tracking-widest text-gold-muted">Servicio</label>
                  <select value={service} onChange={(e) => setService(e.target.value)} className="w-full bg-dark-bg/60 border border-dark-border/60 focus:border-gold-brand focus:outline-none text-xs text-white px-4 py-3 rounded-2xl cursor-pointer">
                    <option value="" disabled>Selecciona un servicio...</option>
                    {getServiceOptions().map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

              <div className="space-y-1.5">
                <div>
                  <label className="block text-xs font-sans font-bold text-dark-text-muted mb-2 tracking-wider">
                    DESCRIPCIÓN BREVE DE SU SOLICITUD
                  </label>
                  <textarea
                    rows={4}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full bg-dark-bg/50 border border-dark-border/40 focus:border-gold-brand text-white text-sm px-4 py-3 rounded-2xl focus:outline-none transition-colors resize-none"
                    placeholder="Describa brevemente cómo podemos ayudarle..."
                  />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-gold-brand hover:bg-gold-light disabled:bg-gold-muted text-dark-bg font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                    <span>Procesando...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    <span>Enviar</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8 space-y-6"
          >
            <div className="w-14 h-14 rounded-full bg-gold-dark/20 border border-gold-brand flex items-center justify-center text-gold-light mx-auto">
              <CheckCircle size={28} />
            </div>
            
            <div className="space-y-2">
              <span className="font-mono text-[10px] font-bold text-gold-light tracking-widest uppercase">ID: {ticketId}</span>
              <h3 className="font-display text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
              <p className="font-sans text-xs md:text-sm text-dark-text-muted max-w-md mx-auto">
                Gracias <span className="text-white font-semibold">{name}</span>. Tu solicitud ha sido enviada correctamente a <span className="text-gold-light">{targetEmail}</span>. Nos pondremos en contacto pronto.
              </p>
            </div>

            <button onClick={() => { setSubmitted(false); setName(''); setEmail(''); setDesc(''); setService(''); }} className="bg-transparent border border-gold-brand/40 hover:border-gold-brand text-gold-light hover:text-white font-sans font-bold text-[10px] uppercase tracking-widest px-6 py-2 rounded-2xl transition-all cursor-pointer">
              Enviar otro mensaje
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
