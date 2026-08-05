import React, { useState } from 'react';
import { Share2, Globe, Mail, Phone, MapPin, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_HREF, WHATSAPP_DISPLAY } from '../lib/whatsapp';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectService: (serviceId: string) => void;
}

export default function Footer({ onNavigate, onSelectService }: FooterProps) {
  const handleLegalClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    onNavigate(section);
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border/40 text-dark-text pt-20 pb-8 relative overflow-hidden">
      
      {/* Simple Text Logo Watermark */}
      <div className="absolute right-[-5%] bottom-[-10%] opacity-[0.03] pointer-events-none z-0 select-none">
        <span className="font-display font-black text-[20vw] leading-none text-white whitespace-nowrap">
          CLIC
        </span>
      </div>

      {/* Upper Footer Links */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('inicio')}>
            <img src="/logoreal.jpeg" alt="Clic Legal" className="w-12 h-12 object-contain rounded-2xl" />
            <span className="font-display font-bold tracking-[0.2em] text-lg text-white">CLIC LEGAL</span>
          </div>
          <p className="font-sans text-xs md:text-sm text-dark-text-muted leading-relaxed max-w-sm uppercase font-bold tracking-widest text-gold-brand">
            UN CLIC DE SATISFACCIÓN
          </p>
          <div className="flex flex-col gap-3 text-dark-text-muted mt-4">
            <a href="mailto:hola@clic.legal" className="flex items-center gap-2 hover:text-gold-light transition-colors w-fit" title="Email de contacto">
              <Mail size={16} />
              <span className="font-mono text-xs">hola@clic.legal</span>
            </a>
            <a href="https://clic.legal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-light transition-colors w-fit" title="Sitio oficial">
              <Globe size={16} />
              <span className="font-mono text-xs">www.clic.legal</span>
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold-light transition-colors w-fit"
              title="Escríbenos por WhatsApp"
              aria-label="Escríbenos por WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span className="font-mono text-xs">{WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>



        {/* Column 2: Empresa */}
        <div className="md:col-span-2 space-y-4">
          <h5 className="font-display text-xs font-bold tracking-widest text-gold-light uppercase">
            Empresa
          </h5>
          <ul className="space-y-2.5 text-xs text-dark-text-muted font-sans">
            <li>
              <button onClick={() => onNavigate('nosotros')} className="hover:text-white transition-colors cursor-pointer text-left">
                Nuestra firma
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('prensa')} className="hover:text-white transition-colors cursor-pointer text-left">
                Prensa y Artículos
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('contacto')} className="hover:text-white transition-colors cursor-pointer text-left">
                Contacto General
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="md:col-span-3 space-y-4">
          <h5 className="font-display text-xs font-bold tracking-widest text-gold-light uppercase">
            Garantías Legales
          </h5>
          <ul className="space-y-2.5 text-xs text-dark-text-muted font-sans">
            <li>
              <a href="#" onClick={(e) => handleLegalClick(e, 'privacidad')} className="hover:text-white transition-colors">
                Políticas de Privacidad (RGPD)
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleLegalClick(e, 'terminos')} className="hover:text-white transition-colors">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleLegalClick(e, 'cookies')} className="hover:text-white transition-colors">
                Política de Cookies
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="relative z-10 border-t border-dark-border/20 pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
          {/* Copyright */}
          <div className="text-xs text-dark-text-muted font-sans text-center">
            © 2026 Clic Legal
          </div>
        </div>
      </div>

    </footer>
  );
}
