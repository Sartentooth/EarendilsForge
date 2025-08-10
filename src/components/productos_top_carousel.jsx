import { useEffect, useRef, useState } from 'react';

const ProductosTopCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  const productos = [
    {
      id: 1,
      nombre: "Espada Élfica Luminosa",
      categoria: "Props & Cosplay",
      precio: "$15,000",
      imagen: "https://placehold.co/600x400/c7ae6a/2d0259?text=Espada+Elfica",
      descripcion: "Réplica perfecta con efectos LED integrados",
      popularidad: "🔥 Más pedido",
      rating: 5
    },
    {
      id: 2,
      nombre: "Dragón Articulado Premium",
      categoria: "Figuras Coleccionables",
      precio: "$25,000",
      imagen: "https://placehold.co/600x400/542580/c7ae6a?text=Dragon+Premium",
      descripcion: "40cm de altura, 15 puntos de articulación",
      popularidad: "⭐ Favorito",
      rating: 5
    },
    {
      id: 3,
      nombre: "Set Miniaturas D&D",
      categoria: "Gaming",
      precio: "$8,500",
      imagen: "https://placehold.co/600x400/939598/ffffff?text=Miniaturas+DnD",
      descripcion: "Pack de 6 héroes únicos para tus aventuras",
      popularidad: "🎮 Gaming",
      rating: 4
    },
    {
      id: 4,
      nombre: "Casco Mandalorian",
      categoria: "Props & Cosplay",
      precio: "$35,000",
      imagen: "https://placehold.co/600x400/510977/c7ae6a?text=Casco+Mandalorian",
      descripcion: "Tamaño real, acabado metálico profesional",
      popularidad: "🏆 Premium",
      rating: 5
    },
    {
      id: 5,
      nombre: "Prototipo Funcional",
      categoria: "Servicios B2B",
      precio: "Consultar",
      imagen: "https://placehold.co/600x400/2d0259/c7ae6a?text=Prototipo+B2B",
      descripcion: "Desarrollo de prototipos para empresas",
      popularidad: "🏢 B2B",
      rating: 5
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % productos.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlay, productos.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % productos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + productos.length) % productos.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Contenedor principal del carrusel */}
      <div 
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        style={{ background: 'var(--color-bg)' }}
      >
        {/* Slides */}
        <div className="relative h-96 md:h-[500px]">
          {productos.map((producto, index) => (
            <div
              key={producto.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                index === currentIndex 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : index < currentIndex 
                    ? 'opacity-0 -translate-x-full scale-95' 
                    : 'opacity-0 translate-x-full scale-95'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Imagen del producto */}
                <div className="relative overflow-hidden">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-cover"
                  />
                  {/* Badge de popularidad */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                    style={{ 
                      background: 'var(--gradient-primary)',
                      color: 'white'
                    }}
                  >
                    {producto.popularidad}
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < producto.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Información del producto */}
                <div className="flex flex-col justify-center p-8" style={{ color: 'var(--color-text)' }}>
                  <div className="mb-4">
                    <span 
                      className="text-sm font-medium px-3 py-1 rounded-full"
                      style={{ 
                        background: 'var(--color-surface)',
                        color: 'var(--color-text-muted)'
                      }}
                    >
                      {producto.categoria}
                    </span>
                  </div>
                  
                  <h3 
                    className="text-3xl font-bold mb-4 text-gradient"
                    style={{ fontFamily: 'var(--font-title)' }}
                  >
                    {producto.nombre}
                  </h3>
                  
                  <p 
                    className="text-lg mb-6 opacity-90"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-text-muted)'
                    }}
                  >
                    {producto.descripcion}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gradient">
                      {producto.precio}
                    </div>
                    
                    <button 
                      className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{ 
                        background: 'var(--gradient-button)',
                        color: 'white',
                        fontFamily: 'var(--font-title)'
                      }}
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
          style={{ background: 'var(--gradient-primary)' }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
          style={{ background: 'var(--gradient-primary)' }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {productos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'scale-125' : 'scale-100 opacity-60'
              }`}
              style={{
                background: index === currentIndex 
                  ? 'var(--color-primary)' 
                  : 'rgba(255,255,255,0.5)',
                boxShadow: index === currentIndex 
                  ? `0 0 15px var(--color-primary)` 
                  : 'none'
              }}
            />
          ))}
        </div>
      </div>

      {/* Navegación por miniaturas (opcional - para pantallas grandes) */}
      <div className="hidden lg:flex justify-center mt-8 space-x-4">
        {productos.map((producto, index) => (
          <button
            key={producto.id}
            onClick={() => goToSlide(index)}
            className={`group relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex 
                ? 'ring-4 scale-110' 
                : 'opacity-60 hover:opacity-100 hover:scale-105'
            }`}
            style={{
              ringColor: index === currentIndex ? 'var(--color-primary)' : 'transparent'
            }}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductosTopCarousel;