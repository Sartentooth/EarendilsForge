import React from 'react';

const CTABanner = () => {
  return (
    <>
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Fondo decorativo eliminado por solicitud del usuario */}

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          {/* Ícono principal */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
          </div>

          {/* Título principal */}
          <h2 
            className="text-4xl md:text-4x1 font-bold mb-6"
            style={{fontFamily: 'var(--font-title)'}}
          >
            ¿Listo para materializar tu visión?
          </h2>

          {/* Subtítulo */}
          <p 
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
            style={{fontFamily: 'var(--font-body)'}}
          >
            Desde props épicos hasta proyectos personalizados, tenemos la tecnología y la pasión 
            para llevar tus ideas del mundo digital al físico.
          </p>

          {/* Características destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Diseño Personalizado</h3>
              <p className="text-sm opacity-80">Modelado 3D único para cada proyecto</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tiempos Record</h3>
              <p className="text-sm opacity-80">Entrega rápida sin comprometer calidad</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Garantía Total</h3>
              <p className="text-sm opacity-80">Satisfacción garantizada o reimprimimos</p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/EarendilsForge/productos"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl bg-white text-gray-900"
              style={{fontFamily: 'var(--font-title)'}}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              Ver Productos y Servicios
            </a>
            
            <a 
              href="/EarendilsForge/contacto"
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900"
              style={{fontFamily: 'var(--font-title)'}}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Consulta Personalizada
            </a>
          </div>

          {/* Garantía adicional */}
          <div className="mt-8 text-sm opacity-80">
            <p>🔒 Presupuesto sin compromiso • 📦 Envíos a todo el país • ⚡ Respuesta en 24hs</p>
          </div>
        </div>
      </section>

      {/* Estilos CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </>
  );
};

export default CTABanner;