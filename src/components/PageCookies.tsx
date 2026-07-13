import React from 'react';

export default function PageCookies() {
  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-dark-text pb-20">
      <div className="max-w-4xl mx-auto px-6 py-20 bg-dark-card/40 backdrop-blur-md rounded-2xl border border-dark-border/40 mt-10 shadow-lg">
        <h1 className="font-display text-3xl font-bold text-white mb-8 border-b border-gold-brand/20 pb-4">
          Política de Cookies
        </h1>
        <div className="space-y-6 font-sans text-sm text-dark-text-muted leading-relaxed">
          <p>
            En Clic Legal utilizamos cookies para mejorar su experiencia de navegación en nuestro sitio web. 
            Al continuar navegando, consideramos que acepta su uso.
          </p>
          <h2 className="text-xl text-gold-light font-bold mt-8">1. ¿Qué son las Cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) 
            cuando visita un sitio web. Ayudan a que el sitio funcione correctamente y a obtener información sobre 
            la navegación de los usuarios.
          </p>
          <h2 className="text-xl text-gold-light font-bold mt-8">2. Tipos de Cookies que Utilizamos</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Cookies Técnicas:</strong> Esenciales para el funcionamiento del sitio (navegación, seguridad).</li>
            <li><strong>Cookies de Análisis:</strong> Nos permiten medir y analizar el comportamiento de los usuarios para mejorar el sitio.</li>
            <li><strong>Cookies de Personalización:</strong> Permiten recordar preferencias, como el idioma o región.</li>
          </ul>
          <h2 className="text-xl text-gold-light font-bold mt-8">3. Gestión de Cookies</h2>
          <p>
            Usted puede configurar su navegador para bloquear o alertarle sobre estas cookies, pero algunas partes 
            del sitio web pueden no funcionar si lo hace. Puede eliminar las cookies ya almacenadas en su equipo 
            a través de las opciones de configuración de su navegador web.
          </p>
          <p className="pt-8 text-xs">
            Última actualización: 2026
          </p>
        </div>
      </div>
    </div>
  );
}
