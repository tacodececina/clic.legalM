import React from 'react';

export default function PagePrivacidad() {
  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-dark-text pb-20">
      <div className="max-w-4xl mx-auto px-6 py-20 bg-dark-card/40 backdrop-blur-md rounded-2xl border border-dark-border/40 mt-10 shadow-lg">
        <h1 className="font-display text-3xl font-bold text-white mb-8 border-b border-gold-brand/20 pb-4">
          Políticas de Privacidad (RGPD)
        </h1>
        <div className="space-y-6 font-sans text-sm text-dark-text-muted leading-relaxed">
          <p>
            En Clic Legal, el tratamiento y la protección de los datos personales es nuestra máxima prioridad. 
            Esta Política de Privacidad describe cómo recopilamos, usamos, protegemos y compartimos su información.
          </p>
          <h2 className="text-xl text-gold-light font-bold mt-8">1. Información que Recopilamos</h2>
          <p>
            Recopilamos información personal que usted nos proporciona directamente al usar nuestros servicios, 
            como su nombre, dirección de correo electrónico, número de teléfono y datos relevantes para su caso.
          </p>
          <h2 className="text-xl text-gold-light font-bold mt-8">2. Uso de la Información</h2>
          <p>
            Utilizamos su información personal exclusivamente para brindarle nuestros servicios legales, contables 
            o psicológicos, comunicarnos con usted y cumplir con nuestras obligaciones legales.
          </p>
          <h2 className="text-xl text-gold-light font-bold mt-8">3. Protección de Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas avanzadas para proteger su información 
            contra accesos no autorizados, alteraciones o divulgación. Su privacidad está garantizada bajo el 
            secreto profesional.
          </p>
          <h2 className="text-xl text-gold-light font-bold mt-8">4. Derechos del Usuario (RGPD)</h2>
          <p>
            Usted tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales. 
            Puede ejercer estos derechos en cualquier momento enviando un correo a <strong>hola@clic.legal</strong>.
          </p>
          <p className="pt-8 text-xs">
            Última actualización: 2026
          </p>
        </div>
      </div>
    </div>
  );
}
