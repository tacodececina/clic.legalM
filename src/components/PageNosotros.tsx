import React from 'react';
import { Youtube, Instagram, Facebook, MessageCircle, Shield, HeartHandshake, Play, User, Smartphone } from 'lucide-react';

export default function PageNosotros() {
  const socials = [
    { name: 'WhatsApp', icon: <MessageCircle size={24} />, url: 'https://wa.me/527773880263', color: 'text-green-500' },
    { name: 'YouTube', icon: <Youtube size={24} />, url: 'https://youtube.com/@cliclegal-z8f?si=Rd4gqXkKYiij3qmE', color: 'text-red-500' },
    { name: 'Instagram', icon: <Instagram size={24} />, url: 'https://www.instagram.com/clic.legal?igsh=MWhkanI1dmh1dXlodw==', color: 'text-pink-500' },
    { name: 'Facebook', icon: <Facebook size={24} />, url: 'https://www.facebook.com/share/1Bu8aEx6HA/', color: 'text-blue-500' },
    { name: 'TikTok', icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.52 3.23-1.49 4.54-1.07 1.44-2.73 2.34-4.5 2.58-1.74.23-3.52-.07-5.06-.92-1.52-.83-2.67-2.22-3.23-3.83-.55-1.61-.47-3.41.24-4.96.69-1.51 1.95-2.74 3.48-3.32 1.55-.58 3.29-.62 4.86-.14v4.06c-.82-.24-1.72-.25-2.52-.02-.8.23-1.48.74-1.93 1.44-.45.71-.58 1.58-.33 2.38.25.79.83 1.43 1.59 1.74.77.31 1.64.25 2.37-.16.73-.42 1.25-1.12 1.43-1.94.18-.81.12-1.65-.16-2.43V.02z"/></svg>, url: 'https://www.tiktok.com/@clic.legal?_r=1&_t=ZS-980fv436FVA', color: 'text-white' },
    { name: 'hola@clic.legal', icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>, url: 'mailto:hola@clic.legal', color: 'text-gold-light' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-dark-text pb-20">
      
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden border-b border-dark-border/20">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/oficina.jpg"
            alt="Nosotros Clic Legal"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-xs font-bold tracking-widest text-gold-brand uppercase mb-4 block">
            Nuestra Historia
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
            Más que asesoría, <br/><span className="text-gold-light">un acompañamiento integral.</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-dark-text-muted leading-relaxed max-w-3xl mx-auto">
            Clic Legal nació con la visión de transformar la manera en que las personas y empresas enfrentan sus desafíos. Entendemos que detrás de cada trámite legal o contable, hay seres humanos buscando seguridad y tranquilidad. Por ello, hemos integrado un servicio donde lo jurídico, lo económico y lo emocional caminan de la mano, brindándote un soporte real y cálido en cada paso.
          </p>
        </div>
      </div>

      {/* Servicios Integrales */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Nuestros Pilares</h2>
          <p className="font-sans text-sm text-dark-text-muted max-w-2xl mx-auto">Los principios que guían nuestra forma de trabajar y de acompañarte en cada etapa de tu proceso.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 bg-dark-card/40 backdrop-blur-md border border-dark-border/40 rounded-2xl flex flex-col items-center text-center group hover:border-gold-brand/40 transition-all shadow-lg">
            <div className="w-16 h-16 bg-gold-dark/20 text-gold-brand rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <User size={32} />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Humanización</h3>
            <p className="text-sm text-dark-text-muted">Hablamos tu idioma, sin tecnicismos innecesarios.</p>
          </div>
          
          <div className="p-8 bg-dark-card/40 backdrop-blur-md border border-dark-border/40 rounded-2xl flex flex-col items-center text-center group hover:border-gold-brand/40 transition-all shadow-lg">
            <div className="w-16 h-16 bg-gold-dark/20 text-gold-brand rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HeartHandshake size={32} />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Empatía</h3>
            <p className="text-sm text-dark-text-muted">Tu problema nos importa tanto como a ti.</p>
          </div>

          <div className="p-8 bg-dark-card/40 backdrop-blur-md border border-dark-border/40 rounded-2xl flex flex-col items-center text-center group hover:border-gold-brand/40 transition-all shadow-lg">
            <div className="w-16 h-16 bg-gold-dark/20 text-gold-brand rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield size={32} />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Responsabilidad</h3>
            <p className="text-sm text-dark-text-muted">Resultados concretos con transparencia total.</p>
          </div>

          <div className="p-8 bg-dark-card/40 backdrop-blur-md border border-dark-border/40 rounded-2xl flex flex-col items-center text-center group hover:border-gold-brand/40 transition-all shadow-lg">
            <div className="w-16 h-16 bg-gold-dark/20 text-gold-brand rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Smartphone size={32} />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">Accesibilidad Digital</h3>
            <p className="text-sm text-dark-text-muted">Estamos donde tú estás, facilitando cada proceso a través de la tecnología.</p>
          </div>
        </div>
      </div>

      {/* Media Section: YouTube Podcasts */}
      <div className="bg-dark-surface border-y border-dark-border/30 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold text-white">Nuestros Podcasts y Videoblogs</h2>
            <p className="font-sans text-dark-text-muted leading-relaxed text-sm">
              Visita nuestro canal de YouTube donde compartimos consejos, análisis de casos, y charlas profundas sobre cómo navegar el mundo legal, contable y psicológico de manera saludable.
            </p>
            <a 
              href="https://youtube.com/@cliclegal-z8f?si=Rd4gqXkKYiij3qmE" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-2xl transition-all shadow-lg hover:shadow-red-600/20"
            >
              <Youtube size={18} />
              Visitar Canal de YouTube
            </a>
          </div>

          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-dark-border/50">
             <div className="w-full h-full bg-dark-card flex items-center justify-center flex-col gap-4 p-8 text-center relative group cursor-pointer" onClick={() => window.open('https://youtube.com/@cliclegal-z8f?si=Rd4gqXkKYiij3qmE', '_blank')}>
                <div className="absolute inset-0 bg-[url('/img/equipo.jpg')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="ml-1" size={32} />
                </div>
                <h4 className="font-display font-bold text-xl text-white z-10">Ver nuestros últimos episodios</h4>
             </div>
          </div>
        </div>
      </div>

      {/* Redes Sociales y Contacto */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Conecta con nosotros</h2>
        <p className="font-sans text-sm text-dark-text-muted mb-12 max-w-xl mx-auto">
          Síguenos en nuestras redes sociales para contenido diario, actualizaciones y recursos de apoyo. Estamos a un clic de distancia.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-dark-card/40 backdrop-blur-md border border-dark-border hover:border-gold-brand/50 px-6 py-4 rounded-2xl transition-all hover:-translate-y-1 shadow-lg group"
            >
              <span className={`${social.color} group-hover:scale-110 transition-transform`}>
                {social.icon}
              </span>
              <span className="font-sans font-semibold text-white text-sm">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
