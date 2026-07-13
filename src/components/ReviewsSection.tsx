import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  id: string;
  author: string;
  role: string;
  company: string;
  title: string;
  text: string;
  rating: number;
}

const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Ing. Carlos Mendoza',
    role: 'Director Ejecutivo',
    company: 'Mendoza Energías S.A.',
    title: 'Estrategia impositiva y legal impecable',
    text: 'Enfrentábamos una reestructuración de activos de gran envergadura. Clic Legal no solo diseñó un esquema societario óptimo que nos ahorró miles en impuestos lícitamente, sino que su acompañamiento mitigó todo el estrés que este tipo de transacciones genera en la junta directiva.',
    rating: 5,
  },
  {
    id: 'rev-2',
    author: 'Dra. Patricia Arreola',
    role: 'Socia Fundadora',
    company: 'Fintech Nexus Latam',
    title: 'Absoluta confidencialidad y rapidez',
    text: 'El registro internacional de nuestras marcas y el blindaje de propiedad intelectual de nuestro software se resolvió con una celeridad asombrosa. Es refrescante trabajar con profesionales que entienden el ritmo del ecosistema tecnológico actual sin descuidar el rigor judicial.',
    rating: 5,
  },
  {
    id: 'rev-3',
    author: 'Msc. Alejandro Gaviria',
    role: 'Director de Recursos Humanos',
    company: 'Sistemas Logísticos del Norte',
    title: 'Soporte humano y pericial invaluable',
    text: 'Durante un litigio laboral complejo con acusaciones infundadas, el área de psicología forense de Clic Legal fue vital. No solo presentaron un informe pericial psicológico científicamente irrefutable en el juzgado, sino que prepararon emocionalmente a nuestros testigos clave.',
    rating: 5,
  },
  {
    id: 'rev-4',
    author: 'Lic. Mariana De la Vega',
    role: 'Asesora Patrimonial',
    company: 'De la Vega Family Office',
    title: 'Integración única de disciplinas',
    text: 'Lo que más valoramos es la integración. En lugar de coordinar con tres despachos distintos para la sucesión familiar, los auditores fiscales y los abogados civiles de Clic Legal trabajaron de forma conjunta. Una solución verdaderamente integral, profesional y humana.',
    rating: 5,
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews-section" className="py-20 bg-dark-surface border-t border-b border-dark-border/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-gold-light bg-gold-dark/10 border border-gold-brand/20 px-3 py-1 rounded-2xl-sm">
            <ShieldCheck size={12} />
            Opinión de Nuestros Clientes
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Experiencias Respaldadas por la Excelencia
          </h2>
          <p className="font-sans text-xs md:text-sm text-dark-text-muted leading-relaxed">
            La confianza de corporaciones y particulares es nuestro activo más preciado. Conozca el testimonio de quienes han experimentado nuestra asesoría de precisión.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 bg-dark-card border border-dark-border/40 hover:border-gold-brand/30 rounded-2xl-lg space-y-6 relative group transition-all duration-300 shadow-xl shadow-black/5"
            >
              {/* Quote icon background ornament */}
              <div className="absolute top-6 right-6 text-gold-brand/10 group-hover:text-gold-brand/20 transition-colors duration-300">
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-brand text-gold-brand" />
                ))}
              </div>

              {/* Text Block */}
              <div className="space-y-2">
                <h4 className="font-display text-base font-semibold text-white group-hover:text-gold-light transition-colors duration-300">
                  "{review.title}"
                </h4>
                <p className="font-sans text-xs md:text-sm text-dark-text-muted leading-relaxed">
                  {review.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-dark-border/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl-full bg-gold-dark/20 border border-gold-brand/30 flex items-center justify-center text-gold-light font-display font-semibold text-xs uppercase">
                  {review.author.split(' ').pop()?.substring(0, 2) || 'CL'}
                </div>
                <div className="space-y-0.5">
                  <p className="font-sans text-xs font-bold text-white">
                    {review.author}
                  </p>
                  <p className="font-mono text-[9px] text-gold-brand uppercase tracking-wider">
                    {review.role} • <span className="text-dark-text-muted">{review.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
