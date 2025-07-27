import React from 'react';

const PorQueElegirnos = () => {
  const ventajas = [
    {
      titulo: 'Calidad Artesanal',
      descripcion: 'Cada pieza es tratada con el cuidado de un maestro artesano. No solo imprimimos, forjamos con pasión.',
      icono: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      destacado: false
    },
    {
      titulo: 'Tecnología de Vanguardia',
      descripcion: 'Equipos de última generación que nos permiten lograr detalles imposibles con métodos tradicionales.',
      icono: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      destacado: true
    },
    {
      titulo: 'Asesoramiento Personalizado',
      descripcion: 'Te acompañamos desde la idea inicial hasta el producto final. Tu visión es nuestra misión.',
      icono: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      destacado: false
    },
    {
      titulo: 'Tiempos Garantizados',
      descripcion: 'Cumplimos con los plazos acordados sin comprometer la calidad. Tu tiempo es valioso para nosotros.',
      icono: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      destacado: false
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Fondo con patrón sutil */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-primary) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            style={{ fontFamily: 'var(--font-title)' }}
          >
            ¿Por qué elegirnos?
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto opacity-90"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-muted)' 
            }}
          >
            En Eärendil's Forge combinamos la magia de la creatividad con la precisión de la tecnología. 
            Esto es lo que nos hace únicos:
          </p>
        </div>

        {/* Grid de ventajas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ventajas.map((ventaja, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-2xl transition-all duration-500 hover:transform hover:-translate-y-3 ${
                ventaja.destacado ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                background: ventaja.destacado 
                  ? 'var(--gradient-primary)' 
                  : 'var(--gradient-surface)',
                border: ventaja.destacado 
                  ? 'none' 
                  : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: ventaja.destacado 
                  ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
                  : 'none'
              }}
            >
              {/* Badge "Destacado" */}
              {ventaja.destacado && (
                <div 
                  className="absolute -top-3 left-8 px-4 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: 'var(--color-bg)',
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-title)'
                  }}
                >
                  ✨ Destacado
                </div>
              )}

              {/* Contenido principal */}
              <div className="relative z-10">
                {/* Icono */}
                <div 
                  className={`mb-6 transition-all duration-300 ${
                    ventaja.destacado 
                      ? 'text-white group-hover:scale-110' 
                      : 'group-hover:scale-110 group-hover:rotate-3'
                  }`}
                  style={{ 
                    color: ventaja.destacado ? 'white' : 'var(--color-primary)' 
                  }}
                >
                  {ventaja.icono}
                </div>

                {/* Título */}
                <h3 
                  className={`text-2xl font-bold mb-4 ${
                    ventaja.destacado ? 'text-white' : ''
                  }`}
                  style={{ 
                    fontFamily: 'var(--font-title)',
                    color: ventaja.destacado ? 'white' : 'var(--color-text)' 
                  }}
                >
                  {ventaja.titulo}
                </h3>
                
                {/* Descripción */}
                <p 
                  className={`text-lg leading-relaxed ${
                    ventaja.destacado ? 'text-white/90' : ''
                  }`}
                  style={{ 
                    fontFamily: 'var(--font-body)',
                    color: ventaja.destacado ? 'rgba(255,255,255,0.9)' : 'var(--color-text-muted)' 
                  }}
                >
                  {ventaja.descripcion}
                </p>
              </div>

              {/* Efectos de hover */}
              {!ventaja.destacado && (
                <>
                  {/* Brillo sutil */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{ background: 'var(--gradient-primary)' }}
                  />
                  
                  {/* Borde brillante */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                    style={{ 
                      background: `linear-gradient(90deg, transparent, var(--color-primary), transparent)`,
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      padding: '1px'
                    }}
                  />
                </>
              )}

              {/* Efecto destacado hover */}
              {ventaja.destacado && (
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at center, white, transparent 70%)' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Stats rápidas */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { numero: '500+', label: 'Proyectos Completados' },
            { numero: '24h', label: 'Tiempo de Respuesta' },
            { numero: '99%', label: 'Clientes Satisfechos' },
            { numero: '3 años', label: 'de Experiencia' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-3xl md:text-4xl font-bold text-gradient mb-2"
                style={{ fontFamily: 'var(--font-title)' }}
              >
                {stat.numero}
              </div>
              <div 
                className="text-sm opacity-80"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-text-muted)' 
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorQueElegirnos;