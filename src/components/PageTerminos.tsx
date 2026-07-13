import React from 'react';

export default function PageTerminos() {
  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-dark-text pb-20">
      <div className="max-w-4xl mx-auto px-6 py-20 bg-dark-card/40 backdrop-blur-md rounded-2xl border border-dark-border/40 mt-10 shadow-lg">
        <h1 className="font-display text-3xl font-bold text-white mb-8 border-b border-gold-brand/20 pb-4">
          Términos y Condiciones
        </h1>
        <div className="space-y-6 font-sans text-sm text-dark-text-muted leading-relaxed">
          <p>
            Al acceder y utilizar el sitio web de Clic Legal y nuestros servicios, usted acepta estar sujeto 
            a los siguientes términos y condiciones.
          </p>
          <h2 className="text-xl text-gold-light font-bold mt-8">1. Servicios Ofrecidos</h2>
          <p>
            Clic Legal ofrece servicios de asesoría legal, auditoría contable y consultoría psicológica. 
            El alcance exacto de los servicios se definirá en un contrato específico con cada cliente.
          </p>
          <h2 className="text-xl text-gold-light font-bold mt-8">2. Confidencialidad y Secreto Profesional</h2>
          <p>
            Toda la información compartida con nosotros está protegida por estrictos acuerdos de confidencialidad 
            y secreto profesional. No compartiremos detalles de su caso sin su consentimiento previo.
          </p>
          <h2 className="text-xl text-gold-light font-bold mt-8">3. Responsabilidad</h2>
          <p>
            Nos comprometemos a ejercer la máxima diligencia en cada caso. Sin embargo, los resultados legales 
            pueden depender de terceros (ej. autoridades judiciales). No garantizamos resultados específicos, pero 
            sí un compromiso total con su defensa y asesoría.
          </p>
          <h2 className="text-xl text-gold-light font-bold mt-8">4. Modificaciones</h2>
          <p>
            Clic Legal se reserva el derecho de modificar estos términos en cualquier momento. 
            Cualquier cambio será notificado a través de nuestro sitio web.
          </p>
          <p className="pt-8 text-xs">
            Última actualización: 2026
          </p>
        </div>
      </div>
    </div>
  );
}
