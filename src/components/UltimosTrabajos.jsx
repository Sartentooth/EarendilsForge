import React, { useEffect, useRef, useState } from 'react';

const UltimosTrabajos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const intervalRef = useRef(null);

  // Imágenes placeholder - reemplazar con las reales
  const trabajos = [
    {
      id: 1,
      imagen: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
      titulo: "Figura de Dragón Épico",
      descripcion: "Impresión detallada con acabado metálico"
    },
    {
      id: 2,
      imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      titulo: "Armadura Funcional",
      descripcion: "Cosplay de alta calidad con articulaciones"
    },
    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      titulo: "Miniatura de Castillo",
      descripcion: "Arquitectura medieval en escala perfecta"
    },
    {
      id: 4,
      imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      titulo: "Espada Ceremonial",
      descripción: "Metal y plástico combinados magistralmente"
    },
    {
      id: 5,
      imagen: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=600&fit=crop",
      titulo: "Joyería Fantástica",
      descripcion: "Anillos y amuletos con detalles imposibles"
    },
    {
      id: 6,
      imagen: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      titulo: "Prototipos Industriales",
      descripcion: "Precisión técnica para empresas"
    }
  ];

  // Auto-play logic
  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % trabajos.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlay, trabajos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trabajos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trabajos.length) % trabajos.length);
  };

  const openLightbox = (trabajo) => {
    setLightboxImage(trabajo);
    setIsLightboxOpen(true);
    setIsAutoPlay(false);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage(null);
    setIsAutoPlay(true);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Marco animado con glow brutal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `
              conic-gradient(from 0deg at 50% 50%, 
                var(--color-primary) 0deg, 
                transparent 60deg, 
                transparent 120deg, 
                var(--color-secondary) 180deg, 
                transparent 240deg, 
                transparent 300deg, 
                var(--color-primary) 360deg)
            `,
            animation: 'spin 8s linear infinite',
            filter: 'blur(3px)',
            opacity: 0.7
          }}
        />
        <div 
          className="absolute inset-[2px] rounded-3xl"
          style={{ background: 'var(--color-bg)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            style={{ fontFamily: 'var(--font-title)' }}
          >
            Nuestros Últimos Trabajos
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto opacity-90"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-muted)' 
            }}
          >
            Cada pieza cuenta una historia. Desde dragones épicos hasta prototipos industriales, 
            forjamos sueños en tres dimensiones.
          </p>
        </div>

        {/* Marco de forja épico con glow animado */}
        <div className="relative max-w-5xl mx-auto">
          {/* Marco exterior con glow brutal */}
          <div 
            className="relative p-1 rounded-3xl"
            style={{
              background: `
                conic-gradient(from 0deg at 50% 50%, 
                  var(--color-primary) 0deg, 
                  var(--color-secondary) 90deg,
                  var(--color-accent) 180deg, 
                  var(--color-secondary) 270deg,
                  var(--color-primary) 360deg)
              `,
              animation: 'spin 6s linear infinite'
            }}
          >
            {/* Glow exterior múltiple */}
            <div 
              className="absolute -inset-4 rounded-3xl opacity-75"
              style={{
                background: `
                  conic-gradient(from 180deg at 50% 50%, 
                    transparent, 
                    var(--color-primary), 
                    transparent, 
                    var(--color-secondary), 
                    transparent)
                `,
                filter: 'blur(20px)',
                animation: 'spin 8s linear infinite reverse'
              }}
            />
            
            {/* Marco intermedio */}
            <div 
              className="relative p-5 rounded-3xl"
              style={{
                background: 'var(--gradient-surface)',
                boxShadow: `
                  inset 0 0 30px rgba(0,0,0,0.8),
                  0 0 60px var(--color-primary),
                  0 0 100px var(--color-primary)
                `
              }}
            >
              {/* Bruma interior más intensa */}
              <div 
                className="absolute inset-3 rounded-2xl opacity-40 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(ellipse at 30% 30%, var(--color-primary) 0%, transparent 50%),
                    radial-gradient(ellipse at 70% 70%, var(--color-secondary) 0%, transparent 50%)
                  `,
                  filter: 'blur(25px)',
                  animation: 'pulse 4s ease-in-out infinite alternate'
                }}
              />

              {/* Carrusel container */}
              <div 
                className="relative rounded-2xl overflow-hidden z-10"
                style={{ background: 'var(--color-bg)' }}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
              {/* Slides */}
              <div className="relative h-[300px] md:h-[500px]">
                {trabajos.map((trabajo, index) => (
                  <div
                    key={trabajo.id}
                    className={`absolute inset-0 transition-all duration-700 transform ${
                      index === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={trabajo.imagen}
                      alt={trabajo.titulo}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => openLightbox(trabajo)}
                    />
                    
                    {/* Overlay con info */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6"
                    >
                      <div className="text-white">
                        <h3 
                          className="text-2xl md:text-3xl font-bold mb-2"
                          style={{ fontFamily: 'var(--font-title)' }}
                        >
                          {trabajo.titulo}
                        </h3>
                        <p 
                          className="text-lg opacity-90"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {trabajo.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controles épicos */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 group z-10"
                style={{
                  background: 'var(--gradient-primary)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                }}
              >
                <svg className="w-6 h-6 text-white group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 group z-10"
                style={{
                  background: 'var(--gradient-primary)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                }}
              >
                <svg className="w-6 h-6 text-white group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicadores tipo gemas */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {trabajos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'scale-125' : 'scale-100 opacity-60'
                    }`}
                    style={{
                      background: index === currentSlide 
                        ? 'var(--gradient-primary)' 
                        : 'rgba(255,255,255,0.5)',
                      boxShadow: index === currentSlide 
                        ? `0 0 15px var(--color-primary)` 
                        : 'none'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="/galeria"
            className="inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: 'var(--gradient-button)',
              fontFamily: 'var(--font-title)',
              color: 'white',
              textDecoration: 'none'
            }}
          >
            Ver toda la galería
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox épico */}
      {isLightboxOpen && lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage.imagen}
              alt={lightboxImage.titulo}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <button
              onClick={closeLightbox}
              className="absolute -top-4 -right-4 p-2 rounded-full text-white hover:scale-110 transition-transform"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UltimosTrabajos;