import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, CheckCircle, HelpCircle, PhoneCall, Mail, MapPin } from 'lucide-react';
import { ContactSubmission } from '../types';

export default function PageContactoIntegral() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [needs, setNeeds] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<ContactSubmission | null>(null);

  const toggleNeed = (need: string) => {
    if (needs.includes(need)) {
      setNeeds(needs.filter(n => n !== need));
    } else {
      setNeeds([...needs, need]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newSub: ContactSubmission = {
        id: `CL-INT-${Math.floor(1000 + Math.random() * 9000)}`,
        fullName: name,
        email,
        serviceInterest: 'Servicio Integral Multidisciplinario',
        message: `[Servicio Integral] Empresa: ${company || 'N/A'} | Teléfono: ${phone || 'N/A'}\nÁreas de Interés: ${needs.join(', ') || 'Todas las áreas'}\nDetalles: ${message || 'Solicitud de diagnóstico integral.'}`,
        timestamp: new Date().toLocaleString('es-ES'),
        status: 'pending'
      };

      // Save to local storage
      const saved = localStorage.getItem('clic_legal_submissions');
      const list = saved ? JSON.parse(saved) : [];
      list.unshift(newSub);
      localStorage.setItem('clic_legal_submissions', JSON.stringify(list));

      setSubmitted(newSub);
      setIsSubmitting(false);
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setNeeds([]);
      setMessage('');
    }, 1200);
  };

  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-dark-text pb-20">
      
      {/* Banner de Categoría */}
      <div className="relative py-20 overflow-hidden border-b border-dark-border/20">
        <div className="absolute inset-0 z-0">
          <img
            src="/contacto.jpg"
            alt="Servicios Integrados Clic Legal"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/85 to-dark-bg/95" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="space-y-4 max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mt-4">
              ¿Por qué clic legal?
            </h1>
            <p className="font-sans text-sm md:text-base text-dark-text-muted leading-relaxed">
              Un enfoque integral, no solo necesita un abogado; necesita un equipo que entienda su contabilidad, sus derechos y que valide su proceso con un trato profundamente humano y empático.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* General Integral Form */}
        <div>
          <div className="bg-dark-card border border-dark-border/50 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                      Solicitud de Diagnóstico Integral
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-sans font-bold text-dark-text-muted mb-2 tracking-wider">
                            NOMBRE
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Su nombre"
                            className="w-full bg-dark-bg/50 border border-dark-border/40 focus:border-gold-brand focus:outline-none text-sm text-white px-4 py-3 rounded-2xl"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="block text-xs font-sans font-bold text-dark-text-muted mb-2 tracking-wider">
                            CORREO ELECTRÓNICO O NÚMERO TELEFÓNICO
                          </label>
                          <input
                            type="text"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="hola@empresa.com o 55 1234 5678"
                            className="w-full bg-dark-bg/50 border border-dark-border/40 focus:border-gold-brand focus:outline-none text-sm text-white px-4 py-3 rounded-2xl"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5 mt-5">
                        <label className="block text-xs font-sans font-bold text-dark-text-muted mb-2 tracking-wider">
                          DESCRIPCIÓN BREVE DE SU SOLICITUD
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Describa brevemente cómo podemos ayudarle..."
                          className="w-full bg-dark-bg/50 border border-dark-border/40 focus:border-gold-brand focus:outline-none text-sm text-white px-4 py-3 rounded-2xl resize-none"
                        />
                      </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-brand hover:bg-gold-light disabled:bg-gold-muted text-dark-bg font-sans font-bold text-xs uppercase tracking-widest py-3.5 rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <span>Enviar</span>
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
                    <span className="font-mono text-[10px] font-bold text-gold-light tracking-widest uppercase">
                      ID CONSEJO: {submitted.id}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      ¡Sesión del Consejo Registrada!
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-dark-text-muted max-w-md mx-auto">
                      Estimado/a <span className="text-white font-semibold">{submitted.fullName}</span>, hemos agendado la sesión de pre-diagnóstico interdisciplinario. Los tres directores principales revisarán los antecedentes con estricto secreto profesional.
                    </p>
                  </div>

                  <div className="p-4 bg-dark-bg/60 border border-dark-border/40 rounded-2xl text-left text-xs max-w-sm mx-auto space-y-1 font-sans">
                    <p className="text-dark-text-muted">
                      🕒 Registro: <span className="text-white">{submitted.timestamp}</span>
                    </p>
                    <p className="text-dark-text-muted">
                      📩 Correo de enlace: <span className="text-white font-mono">{submitted.email}</span>
                    </p>
                  </div>

                  <button
                    onClick={() => setSubmitted(null)}
                    className="bg-transparent border border-gold-brand/40 hover:border-gold-brand text-gold-light hover:text-white font-sans font-bold text-[10px] uppercase tracking-widest px-6 py-2 rounded-2xl transition-all cursor-pointer"
                  >
                    Registrar otro diagnóstico
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

    </div>
  );
}
