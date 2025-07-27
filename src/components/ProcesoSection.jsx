import React from 'react';

const ProcesoSection = () => {
  const pasos = [
    {
      numero: '01',
      titulo: 'Diseño & Consulta',
      descripcion: 'Analizamos tu idea y la convertimos en un modelo 3D optimizado para impresión.',
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      numero: '02',
      titulo: 'Impresión',
      descripcion: 'Utilizamos tecnología de vanguardia para materializar tu proyecto con la máxima calidad.',
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      numero: '03',
      titulo: 'Acabado',
      descripcion: 'Aplicamos técnicas de post-procesado para lograr el acabado perfecto que imaginaste.',
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      numero: '04',
      titulo: 'Entrega',
      descripcion: 'Tu proyecto listo, empacado con cuidado y entregado en tiempo y forma.',
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1L5 5l4 4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            style={{ fontFamily: 'var(--font-title)' }}
          >
            Nuestro Proceso
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto opacity-90"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-muted)' 
            }}
          >
            Desde la idea hasta la realidad, cada proyecto pasa por nuestro proceso artesanal 
            que combina creatividad, tecnología y precisión.
          </p>
        </div>

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pasos.map((paso, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Línea conectora (solo visible en desktop) */}
              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 z-0" 
                     style={{ color: 'var(--color-primary)' }} />
              )}
              
              {/* Card del paso */}
              <div 
                className="relative z-10 p-8 rounded-2xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2"
                style={{
                  background: 'var(--gradient-surface)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Número del paso */}
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 text-xl font-bold"
                  style={{
                    background: 'var(--gradient-primary)',
                    fontFamily: 'var(--font-title)'
                  }}
                >
                  {paso.numero}
                </div>

                {/* Icono */}
                <div 
                  className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {paso.icono}
                </div>

                {/* Contenido */}
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ 
                    fontFamily: 'var(--font-title)',
                    color: 'var(--color-text)' 
                  }}
                >
                  {paso.titulo}
                </h3>
                
                <p 
                  className="leading-relaxed"
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-text-muted)' 
                  }}
                >
                  {paso.descripcion}
                </p>

                {/* Brillo hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'var(--gradient-primary)' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA al final */}
        <div className="text-center mt-16">
          <p 
            className="text-lg mb-6 opacity-90"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-muted)' 
            }}
          >
            ¿Tenés un proyecto en mente?
          </p>
          <a 
            href="/contacto"
            className="inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: 'var(--gradient-button)',
              fontFamily: 'var(--font-title)',
              color: 'white',
              textDecoration: 'none'
            }}
          >
            Empezá tu proyecto
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcesoSection;