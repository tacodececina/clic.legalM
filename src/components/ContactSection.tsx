import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Target, MessageSquare, CheckCircle, FileText, Trash2, Clock, MapPin } from 'lucide-react';
import { ContactSubmission } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export default function ContactSection({ preselectedService, onClearPreselectedService }: ContactSectionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceInterest, setServiceInterest] = useState('Asesoría Integral');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactSubmission | null>(null);
  const [pastSubmissions, setPastSubmissions] = useState<ContactSubmission[]>([]);

  // Load past submissions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('clic_legal_submissions');
    if (saved) {
      try {
        setPastSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Update service interest if preselected from other cards
  useEffect(() => {
    if (preselectedService) {
      setServiceInterest(preselectedService);
      // Smooth scroll to this container
      const el = document.getElementById('contacto-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);

    // Simulate luxury API response with slight delay
    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: `CL-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        fullName,
        email,
        serviceInterest,
        message: message || 'Evaluación estratégica inicial de portafolio.',
        timestamp: new Date().toLocaleString('es-ES', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'pending'
      };

      const updated = [newSubmission, ...pastSubmissions];
      setPastSubmissions(updated);
      localStorage.setItem('clic_legal_submissions', JSON.stringify(updated));

      setSubmittedData(newSubmission);
      setIsSubmitting(false);

      // Reset fields
      setFullName('');
      setEmail('');
      setMessage('');
      if (onClearPreselectedService) {
        onClearPreselectedService();
      }
    }, 1200);
  };

  const handleDeleteSubmission = (id: string) => {
    const updated = pastSubmissions.filter(s => s.id !== id);
    setPastSubmissions(updated);
    localStorage.setItem('clic_legal_submissions', JSON.stringify(updated));
  };

  return (
    <section id="contacto-section" className="py-24 bg-dark-bg border-t border-dark-border/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Value Propositions */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              ¿Por qué elegir la precisión de Clic Legal?
            </h2>
            <div className="w-16 h-1 bg-gold-brand rounded-2xl" />
          </div>

          <div className="space-y-8">
            
            {/* Point 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-gold-dark/10 border border-gold-brand/20 flex items-center justify-center text-gold-light shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-white mb-2">
                  Autoridad Comprobada
                </h4>
                <p className="font-sans text-sm text-dark-text-muted leading-relaxed">
                  Más de 15 años de trayectoria intachable resolviendo los litigios y auditorías fiscales más complejos a nivel regional.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-gold-dark/10 border border-gold-brand/20 flex items-center justify-center text-gold-light shrink-0">
                <Target size={20} />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-white mb-2">
                  Metodología de Precisión
                </h4>
                <p className="font-sans text-sm text-dark-text-muted leading-relaxed">
                  Cada documento emitido y cada cifra financiera es revisada meticulosamente bajo tres niveles cruzados de supervisión experta.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-gold-dark/10 border border-gold-brand/20 flex items-center justify-center text-gold-light shrink-0">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-white mb-2">
                  Claridad Absoluta
                </h4>
                <p className="font-sans text-sm text-dark-text-muted leading-relaxed">
                  Traducimos el lenguaje judicial y contable hostil a directivas de negocio accionables, devolviéndole a usted el control.
                </p>
              </div>
            </div>

          </div>

          {/* Past Submissions Log (Adds dynamic administrative value) */}
          {pastSubmissions.length > 0 && (
            <div className="pt-8 border-t border-dark-border/30">
              <h4 className="font-display text-sm font-bold tracking-wider text-gold-light uppercase mb-4 flex items-center gap-2">
                <FileText size={16} />
                Sus Solicitudes Activas ({pastSubmissions.length})
              </h4>
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2">
                {pastSubmissions.map((sub) => (
                  <div
                    key={sub.id}
                    className="p-3 bg-dark-card border border-dark-border/40 rounded-2xl flex justify-between items-center text-xs group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-white">{sub.id}</span>
                        <span className="px-1.5 py-0.5 bg-gold-dark/20 text-gold-light font-sans font-bold uppercase rounded-2xl text-[9px]">
                          {sub.serviceInterest}
                        </span>
                      </div>
                      <p className="text-dark-text-muted text-[11px] font-sans">
                        Solicitado por {sub.fullName} • {sub.timestamp}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-[10px] text-yellow-500 font-semibold font-sans">
                        <Clock size={10} />
                        En Análisis
                      </span>
                      <button
                        onClick={() => handleDeleteSubmission(sub.id)}
                        className="text-dark-text-muted hover:text-red-400 p-1 rounded-2xl hover:bg-red-500/10 transition-colors cursor-pointer"
                        title="Eliminar registro"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Form Container */}
        <div className="lg:col-span-7 bg-dark-card border border-dark-border/50 rounded-2xl-lg p-8 md:p-10 relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submittedData ? (
              <motion.div
                key="form-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="mb-8">
                  <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                    Solicite una Evaluación Estratégica
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-dark-text-muted">
                    Complete el formulario para recibir una propuesta interdisciplinaria de alto nivel.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-muted">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-dark-bg/60 border border-dark-border/60 hover:border-gold-brand/30 focus:border-gold-brand focus:outline-none text-sm text-white px-4 py-3.5 rounded-2xl transition-all placeholder:text-dark-text-muted/40"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-muted">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="juan@ejemplo.com"
                      className="w-full bg-dark-bg/60 border border-dark-border/60 hover:border-gold-brand/30 focus:border-gold-brand focus:outline-none text-sm text-white px-4 py-3.5 rounded-2xl transition-all placeholder:text-dark-text-muted/40"
                    />
                  </div>

                  {/* Service interest selector */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-muted">
                      Servicio de Interés
                    </label>
                    <select
                      value={serviceInterest}
                      onChange={(e) => setServiceInterest(e.target.value)}
                      className="w-full bg-dark-bg/60 border border-dark-border/60 hover:border-gold-brand/30 focus:border-gold-brand focus:outline-none text-sm text-white px-4 py-3.5 rounded-2xl transition-all appearance-none cursor-pointer"
                    >
                      <option value="Asesoría Integral">Asesoría Integral</option>
                      <option value="Derecho Corporativo y Mercantil">Derecho Corporativo y Mercantil</option>
                      <option value="Litigio Civil y Administrativo">Litigio Civil y Administrativo</option>
                      <option value="Propiedad Intelectual">Propiedad Intelectual</option>
                      <option value="Auditorías">Auditorías Financieras</option>
                      <option value="Optimización Fiscal">Optimización Fiscal</option>
                      <option value="Soporte Psicológico Forense y Judicial">Soporte Psicológico Forense y Judicial</option>
                      <option value="Manejo de Crisis Corporativas">Manejo de Crisis Corporativas</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-muted">
                      Mensaje / Contexto del Caso
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describa brevemente su situación o los objetivos estratégicos de su organización..."
                      className="w-full bg-dark-bg/60 border border-dark-border/60 hover:border-gold-brand/30 focus:border-gold-brand focus:outline-none text-sm text-white px-4 py-3.5 rounded-2xl transition-all placeholder:text-dark-text-muted/40 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-brand hover:bg-gold-light disabled:bg-gold-muted text-dark-bg font-sans font-bold text-xs uppercase tracking-widest py-4 rounded-2xl transition-all duration-300 shadow-md shadow-gold-brand/10 hover:shadow-gold-brand/20 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-dark-bg border-t-transparent rounded-2xl-full animate-spin" />
                        <span>Validando Expediente...</span>
                      </>
                    ) : (
                      <span>Enviar Solicitud</span>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 rounded-2xl-full bg-gold-dark/20 border border-gold-brand flex items-center justify-center text-gold-light mx-auto">
                  <CheckCircle size={32} />
                </div>
                
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-gold-light tracking-widest uppercase">
                    CÓDIGO DE EXPEDIENTE: {submittedData.id}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    ¡Solicitud Recibida con Éxito!
                  </h3>
                  <p className="font-sans text-sm text-dark-text-muted max-w-md mx-auto">
                    Estimado/a <span className="text-white font-semibold">{submittedData.fullName}</span>, hemos registrado su consulta de <span className="text-white font-semibold">"{submittedData.serviceInterest}"</span>. Un socio especializado del área correspondiente se pondrá en contacto con usted en un plazo no mayor a 4 horas laborables.
                  </p>
                </div>

                <div className="p-4 bg-dark-bg/60 border border-dark-border/40 rounded-2xl text-left text-xs space-y-2 max-w-sm mx-auto font-sans">
                  <p className="text-dark-text-muted">
                    <strong className="text-gold-light uppercase tracking-wider text-[10px]">Puntos de Contacto</strong>
                  </p>
                  <p className="text-dark-text-muted">
                    📧 Correo asignado: <span className="text-white font-mono">{submittedData.email}</span>
                  </p>
                  <p className="text-dark-text-muted">
                    🕒 Hora de registro: <span className="text-white">{submittedData.timestamp}</span>
                  </p>
                </div>

                <button
                  onClick={() => setSubmittedData(null)}
                  className="bg-transparent border border-gold-brand/40 hover:border-gold-brand text-gold-light hover:text-white font-sans font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-2xl transition-all cursor-pointer"
                >
                  Solicitar otra evaluación
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
