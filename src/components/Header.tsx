import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
interface HeaderProps {
  onContactClick: () => void;
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Header({ onContactClick, onNavigate, activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'legal', label: 'Legal' },
    { id: 'contable', label: 'Contable' },
    { id: 'psicologia', label: 'Psicología' },
    { id: 'prensa', label: 'Prensa' },
    { id: 'nosotros', label: 'Nuestra firma' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-dark-bg/95 backdrop-blur-md border-b border-dark-border ${
        scrolled ? 'py-2' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleItemClick('inicio')}
        >
          <img 
            src="/logoreal.jpeg" 
            alt="Clic Legal Logo" 
            className={`object-contain rounded-2xl group-hover:scale-105 transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-12 h-12'}`} 
          />
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-[0.25em] text-xl text-white leading-none">CLIC LEGAL</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-gold-light'
                    : 'text-dark-text-muted hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-brand rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-4">
          <button
            id="header-contact-btn"
            onClick={onContactClick}
            className="hidden sm:flex items-center gap-2 bg-gold-brand hover:bg-gold-light text-dark-bg font-sans font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-gold-brand/10 hover:shadow-xl hover:shadow-gold-brand/20 cursor-pointer"
          >
            <PhoneCall size={14} />
            Contáctanos
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-dark-text-muted hover:text-white focus:outline-none cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-dark-surface border-b border-dark-border shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-6 py-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`font-sans text-left text-sm uppercase tracking-wider font-semibold py-2 border-l-2 pl-3 transition-colors ${
                      isActive
                        ? 'border-gold-brand text-gold-light bg-gold-dark/10'
                        : 'border-transparent text-dark-text-muted hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => {
                onContactClick();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-gold-brand hover:bg-gold-light text-dark-bg font-sans font-bold text-sm uppercase tracking-widest py-3.5 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <PhoneCall size={16} />
              Contáctanos Directo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
