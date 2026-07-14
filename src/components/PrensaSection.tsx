import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, User, X, Share2, Mail, Check, Newspaper } from 'lucide-react';
import { NEWS } from '../data';
import { NewsArticle } from '../types';

export default function PrensaSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [copied, setCopied] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleShare = () => {
    setCopied(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <section id="prensa-section" className="py-24 bg-dark-bg border-t border-dark-border/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-gold-light bg-gold-dark/10 border border-gold-brand/20 px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase">
            <Newspaper size={12} />
            Opinión y Prensa
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Columnas de Análisis Estratégico
          </h2>
          <p className="font-sans text-dark-text-muted max-w-xl text-sm md:text-base leading-relaxed">
            Nuestros socios publican activamente análisis rigurosos sobre las reformas legislativas, planificación contable e impacto psicológico forense.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS.map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ y: -6, borderColor: 'rgba(148,124,99,0.4)' }}
              className="bg-dark-card border border-dark-border/40 rounded-3xl p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Meta details bar */}
                <div className="flex items-center justify-between text-[11px] font-sans font-medium">
                  <span className="px-2.5 py-0.5 bg-gold-dark/20 text-gold-light rounded-lg font-bold uppercase tracking-wider text-[9px] border border-gold-brand/10">
                    {article.category}
                  </span>
                  <span className="text-dark-text-muted">{article.date}</span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setSelectedArticle(article)}
                  className="font-display text-lg font-bold text-white hover:text-gold-light cursor-pointer transition-colors leading-snug"
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-xs text-dark-text-muted leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Author & CTA Row */}
              <div className="mt-6 pt-4 border-t border-dark-border/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gold-dark/30 border border-gold-brand/30 flex items-center justify-center text-gold-light">
                    <User size={12} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-white leading-tight">{article.author}</p>
                    <p className="text-[9px] text-dark-text-muted leading-none">{article.authorRole.split(' de ')[0]}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="p-1.5 rounded-full border border-dark-border hover:border-gold-brand hover:text-gold-light text-dark-text-muted transition-all cursor-pointer"
                  title="Leer columna completa"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini Newsletter Sign-up */}
        <div className="mt-16 p-8 bg-dark-card/40 border border-dark-border/40 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-2">
            <h4 className="font-display text-lg font-bold text-white">Suscríbase al Boletín de Precisión</h4>
            <p className="font-sans text-xs text-dark-text-muted">
              Reciba de forma quincenal las circulares informativas con resumen analítico de reformas y normativas impositivas de Clic Legal.
            </p>
          </div>
          <div className="md:col-span-6">
            <AnimatePresence mode="wait">
              {!newsletterSuccess ? (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Escriba su correo electrónico corporativo..."
                    className="flex-grow bg-dark-bg/60 border border-dark-border/60 focus:border-gold-brand focus:outline-none text-xs text-white px-4 py-3.5 rounded-2xl transition-all placeholder:text-dark-text-muted/40"
                  />
                  <button
                    type="submit"
                    className="bg-gold-brand hover:bg-gold-light text-dark-bg font-sans font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-2xl transition-all cursor-pointer"
                  >
                    Suscribirse
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3 bg-gold-dark/10 border border-gold-brand/30 rounded-2xl text-xs text-gold-light font-sans font-medium flex items-center gap-2"
                >
                  <Check size={14} className="stroke-[3]" />
                  <span>Suscripción confirmada. Se ha registrado en la lista de difusión de Clic Legal.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Article Reader Modal Drawer */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-dark-card border border-dark-border rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute right-4 top-4 w-9 h-9 rounded-full border border-dark-border hover:border-gold-brand/40 bg-dark-card/80 flex items-center justify-center text-dark-text-muted hover:text-white transition-all cursor-pointer"
                aria-label="Cerrar artículo"
              >
                <X size={16} />
              </button>

              {/* Cover Top Meta */}
              <div className="p-8 bg-dark-bg/40 border-b border-dark-border/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-0.5 bg-gold-dark/20 text-gold-light rounded-lg font-bold uppercase tracking-wider text-[9px] border border-gold-brand/10">
                    {selectedArticle.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-dark-text-muted font-sans">
                    <Calendar size={12} />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-dark-text-muted font-sans border-l border-dark-border/40 pl-3">
                    <Clock size={12} />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>

              {/* Author Banner */}
              <div className="px-8 py-4 bg-gold-dark/5 border-b border-dark-border/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold-dark/20 border border-gold-brand/20 flex items-center justify-center text-gold-light">
                    <User size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white leading-tight">{selectedArticle.author}</h5>
                    <p className="text-[10px] text-gold-light font-medium leading-none">{selectedArticle.authorRole}</p>
                  </div>
                </div>

                {/* Share Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-1.5 bg-dark-bg/60 hover:bg-dark-bg border border-dark-border/60 hover:border-gold-brand/30 text-[10px] font-sans font-bold text-gold-light uppercase tracking-wider px-3 py-1.5 rounded-2xl transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="stroke-[3]" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Share2 size={12} />
                        <span>Enlace</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Article Content Body */}
              <div className="p-8 max-h-[350px] overflow-y-auto space-y-4 font-sans text-sm text-dark-text-muted leading-relaxed">
                <p className="font-semibold text-white italic">
                  {selectedArticle.excerpt}
                </p>
                <div className="w-10 h-0.5 bg-gold-brand rounded-2xl my-4" />
                <p>{selectedArticle.content}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum nulla sem, nec accumsan metus hendrerit vel. Phasellus hendrerit rhoncus dolor, ac aliquet ex tristique finibus. Cras vitae lacus eget nisi gravida eleifend sed nec quam. Ut quis justo mi. Fusce gravida, est in semper cursus, nunc ante lacinia est, sed sodales lectus eros sed turpis.
                </p>
                <p>
                  Praesent finibus rhoncus sem, non ultrices felis dapibus sed. Ut pellentesque est a iaculis accumsan. Sed cursus est sit amet ligula rhoncus accumsan. Nullam quis erat a lectus consequat hendrerit pellentesque sed nisi.
                </p>
              </div>

              {/* Modal footer call-to-action */}
              <div className="p-6 bg-dark-bg/50 border-t border-dark-border/40 text-center">
                <p className="text-[11px] text-dark-text-muted font-sans mb-3">
                  ¿Desea profundizar en este análisis o recibir asesoría directa sobre este tema?
                </p>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    // Smooth scroll to contact
                    const el = document.getElementById('contacto-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gold-brand hover:bg-gold-light text-dark-bg font-sans font-bold text-[10px] uppercase tracking-widest px-6 py-2.5 rounded-2xl transition-all cursor-pointer"
                >
                  Agendar Consulta de Diagnóstico
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
