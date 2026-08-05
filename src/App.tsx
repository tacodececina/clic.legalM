import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Pilars from './components/Pilars';
import ScopeEstimator from './components/ScopeEstimator';
import ContactSection from './components/ContactSection';
import Partners from './components/Partners';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';

// Page Views
import PageLegal from './components/PageLegal';
import PageContable from './components/PageContable';
import PagePsicologia from './components/PagePsicologia';
import PagePrensa from './components/PagePrensa';
import PageNosotros from './components/PageNosotros';
import PageContactoIntegral from './components/PageContactoIntegral';
import PagePrivacidad from './components/PagePrivacidad';
import PageTerminos from './components/PageTerminos';
import PageCookies from './components/PageCookies';

import WhatsAppButton from './components/WhatsAppButton';

import { ArrowUp, Video } from 'lucide-react';

// Secciones que pueden abrirse por URL directa (el servidor sirve index.html
// para cualquier ruta). La navegación interna sigue siendo por estado.
const DEEP_LINK_SECTIONS = [
  'inicio', 'legal', 'contable', 'psicologia', 'prensa',
  'nosotros', 'contacto', 'privacidad', 'terminos', 'cookies',
];

const sectionFromUrl = () => {
  const slug = window.location.pathname.replace(/^\/+|\/+$/g, '');
  return DEEP_LINK_SECTIONS.includes(slug) ? slug : 'inicio';
};

export default function App() {
  const [activeSection, setActiveSection] = useState(sectionFromUrl);
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Pasarela estimador → formulario de contacto de la home
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [estimationDraft, setEstimationDraft] = useState<string | undefined>(undefined);

  // Monitor scrolling to show "back to top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler to navigate between pages (scrolling back to top immediately)
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'legal':
        return <PageLegal />;
      case 'contable':
        return <PageContable />;
      case 'psicologia':
        return <PagePsicologia />;
      case 'prensa':
        return <PagePrensa />;
      case 'nosotros':
        return <PageNosotros />;
      case 'contacto':
        return <PageContactoIntegral />;
      case 'privacidad':
        return <PagePrivacidad />;
      case 'terminos':
        return <PageTerminos />;
      case 'cookies':
        return <PageCookies />;
      case 'inicio':
      default:
        return (
          <>
            <Hero
              onPrimaryClick={() => handleNavigate('contacto')}
              onSecondaryClick={() => handleNavigate('nosotros')}
            />

            <Pilars
              onSelectPillar={(pillarId) => handleNavigate(pillarId)}
              onSelectService={() => handleNavigate('contacto')}
            />

            <div className="bg-dark-bg pt-12 pb-4">
              <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gold-dark/10 backdrop-blur-md border border-gold-brand/20 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gold-brand text-dark-bg rounded-full flex items-center justify-center shrink-0">
                      <Video size={28} />
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-bold text-white mb-2">Modalidad de atención</h4>
                      <p className="font-sans text-sm md:text-base text-dark-text-muted">Todos nuestros servicios se ofrecen en modalidad presencial, en línea o híbrida, adaptándonos a las necesidades de cada persona o institución.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ScopeEstimator
              onApplyEstimation={(summaryText, serviceTitle) => {
                setEstimationDraft(summaryText);
                setPreselectedService(serviceTitle);
              }}
            />

            <ReviewsSection />
            <Partners />
            <FaqSection />

            <ContactSection
              preselectedService={preselectedService}
              onClearPreselectedService={() => setPreselectedService(undefined)}
              initialMessage={estimationDraft}
            />
          </>
        );
    }
  };

  return (
    <div className="bg-dark-bg min-h-screen text-dark-text font-sans antialiased selection:bg-gold-brand selection:text-dark-bg">
      {/* Upper Navigation Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onContactClick={() => handleNavigate('contacto')}
      />

      {/* Main Dynamic Frame */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectService={(serviceId) => {
          // If in footer a sub-service is clicked, navigate to respective major category page
          if (serviceId.includes('corp') || serviceId.includes('litigio')) {
            handleNavigate('legal');
          } else if (serviceId.includes('auditor') || serviceId.includes('fiscal')) {
            handleNavigate('contable');
          } else {
            handleNavigate('psicologia');
          }
        }}
      />

      {/* WhatsApp Business floating button (desktop; en móvil vive en el Footer) */}
      <WhatsAppButton />

      {/* Back to Top floating scroll button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-gold-brand hover:bg-gold-light text-dark-bg rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-90 transition-all cursor-pointer"
          aria-label="Regresar arriba"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
