import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, User, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { NEWS } from '../data';
import { NewsArticle } from '../types';
import ContactForm from './ContactForm';

export default function PagePrensa() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const filteredNews = selectedCategory === 'todos'
    ? NEWS
    : NEWS.filter(item => item.category === selectedCategory);

  const categories = ['todos', ...Array.from(new Set(NEWS.map(n => n.category)))];

  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-dark-text pb-20">
      
      {/* Banner de Categoría */}
      <div className="relative py-20 overflow-hidden border-b border-dark-border/20">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/prensa.jpg"
            alt="Prensa y Artículos"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="space-y-4 max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none">
              Prensa y Artículos
            </h1>
            <p className="font-sans text-sm md:text-base text-dark-text-muted leading-relaxed">
              Consulte las últimas publicaciones, columnas de opinión y análisis normativos de nuestros socios directores. Compartimos perspectivas rigurosas sobre los desafíos impositivos y legales de 2026.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-dark-border/20">
        <div className="bg-gold-dark/10 backdrop-blur-md border border-gold-brand/20 p-8 rounded-2xl">
          <h2 className="font-display text-2xl font-bold text-white mb-2">
            Portal para Reporteros
          </h2>
          <p className="font-sans text-sm text-dark-text-muted mb-6">
            Sube tus propios contenidos, imágenes, textos o videos para revisión y publicación.
          </p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Contenido enviado para revisión."); }}>
            <input type="text" placeholder="Título de la nota" className="w-full bg-dark-bg/50 border border-dark-border/40 text-white px-4 py-2 rounded-xl focus:border-gold-brand focus:outline-none" />
            <textarea placeholder="Contenido o texto de la nota..." rows={4} className="w-full bg-dark-bg/50 border border-dark-border/40 text-white px-4 py-2 rounded-xl focus:border-gold-brand focus:outline-none resize-none"></textarea>
            <div className="flex flex-wrap gap-4 items-center">
              <label className="bg-dark-bg border border-dark-border/40 hover:border-gold-brand text-white px-4 py-2 rounded-xl text-xs cursor-pointer transition-colors">
                Adjuntar Archivos (Imágenes/Videos)
                <input type="file" className="hidden" multiple />
              </label>
              <button type="submit" className="bg-gold-brand hover:bg-gold-light text-dark-bg font-bold px-6 py-2 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer">
                Subir Contenido
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Detail Article View */}
        <AnimatePresence mode="wait">
          {activeArticle ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8 bg-dark-card/40 backdrop-blur-md border border-dark-border/50 p-8 md:p-12 rounded-3xl shadow-2xl"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="flex items-center gap-2 text-xs font-semibold text-gold-brand hover:text-gold-light transition-colors uppercase tracking-wider cursor-pointer"
              >
                <ArrowLeft size={14} /> Regresar a la lista de artículos
              </button>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-[10px] font-sans font-bold tracking-widest text-gold-brand uppercase">
                  <span>{activeArticle.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Calendar size={11} /> {activeArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {activeArticle.readTime}</span>
                </div>
                <h2 className="font-display text-2xl md:text-4xl font-bold text-white leading-tight">
                  {activeArticle.title}
                </h2>
              </div>

              {/* Author Card */}
              <div className="flex items-center gap-3 p-4 bg-dark-bg/60 border border-dark-border/40 rounded-3xl max-w-md">
                <div className="w-10 h-10 rounded-full bg-gold-dark/20 border border-gold-brand/20 flex items-center justify-center text-gold-light font-bold font-display text-xs">
                  {activeArticle.author.split(' ').pop()?.substring(0, 2) || 'AU'}
                </div>
                <div>
                  <p className="font-sans text-xs font-bold text-white">{activeArticle.author}</p>
                  <p className="font-mono text-[9px] text-gold-brand uppercase tracking-wider">{activeArticle.authorRole}</p>
                </div>
              </div>

              {/* Body Content */}
              <p className="font-sans text-sm md:text-base text-dark-text-muted leading-relaxed whitespace-pre-line max-w-4xl border-t border-dark-border/20 pt-8">
                {activeArticle.content}
                {"\n\n"}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat justo. Pellentesque efficitur, ex vitae sollicitudin interdum, purus libero ultrices nulla, ut imperdiet nunc leo vitae nibh. Vivamus eu magna porta, accumsan diam id, lobortis nulla. Curabitur vel elementum metus, et semper massa. Cras eu facilisis nunc. 
                {"\n\n"}
                Sed eget accumsan dui. Aliquam efficitur erat arcu, sed commodo nunc molestie hendrerit. Phasellus at elit accumsan, elementum dolor sit amet, imperdiet magna. Nullam vitae iaculis eros. Phasellus aliquet sem augue, sit amet dictum purus egestas id. Praesent finibus dictum pretium. Cras ac dolor elementum, tincidunt magna vel, tempus mauris. Curabitur ut ante varius, feugiat ligula rhoncus, feugiat ipsum.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredNews.map((item) => (
                  <article
                    key={item.id}
                    className="p-6 bg-dark-card/40 backdrop-blur-md border border-dark-border/40 hover:border-gold-brand/30 rounded-3xl flex flex-col justify-between group transition-all duration-300 relative shadow-xl hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[9px] font-sans font-bold tracking-widest text-gold-brand uppercase">
                        <span>{item.category}</span>
                        <span>{item.readTime}</span>
                      </div>

                      <h3 className="font-display text-base md:text-lg font-bold text-white group-hover:text-gold-light transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="font-sans text-xs text-dark-text-muted leading-relaxed">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-dark-border/20 flex items-center justify-between">
                      <div className="text-[10px] font-sans">
                        <p className="text-white font-bold">{item.author}</p>
                        <p className="text-dark-text-muted text-[9px] truncate max-w-[150px]">{item.authorRole}</p>
                      </div>
                      
                      <button
                        onClick={() => setActiveArticle(item)}
                        className="text-xs font-semibold text-gold-brand group-hover:text-gold-light flex items-center gap-1 transition-colors uppercase tracking-wider cursor-pointer"
                      >
                        Leer Artículo <BookOpen size={12} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
