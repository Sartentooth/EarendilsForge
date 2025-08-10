import { useEffect, useState } from 'react';

const TestimoniosSection = () => {
  const [currentTestimonio, setCurrentTestimonio] = useState(0);

  const testimonios = [
    {
      id: 1,
      nombre: "Carlos Mendez",
      cargo: "Director Creativo",
      avatar: "https://placehold.co/80x80/c7ae6a/2d0259?text=CM",
  testimonio: "Earendil's Forge transformó nuestras ideas en realidad. El nivel de detalle y acabado superó todas nuestras expectativas. Desde props para producciones hasta proyectos personalizados, siempre entregan calidad premium.",
      rating: 5,
      proyecto: "Set completo para producción audiovisual"
    },
    {
      id: 2,
      nombre: "Ana Rodriguez",
      empresa: "Maker Space BA",
      cargo: "Fundadora",
      avatar: "https://placehold.co/80x80/542580/c7ae6a?text=AR",
      testimonio: "Como emprendedora en el mundo maker, necesitaba un proveedor confiable. No solo me vendieron la impresora perfecta para mi negocio, sino que me capacitaron y me acompañan en cada proyecto. Realmente son socios estratégicos.",
      rating: 5,
  proyecto: "Setup completo para empresas + capacitación"
    },
    {
      id: 3,
      nombre: "Miguel Torres",
      empresa: "Collector's Corner",
      cargo: "Coleccionista",
      avatar: "https://placehold.co/80x80/939598/ffffff?text=MT",
      testimonio: "Soy coleccionista de miniaturas y props, y puedo asegurar que la calidad de Earendil's Forge está al nivel de las mejores marcas internacionales. Cada pieza es una obra de arte.",
      rating: 5,
      proyecto: "Colección personalizada de 20 figuras"
    },
    {
      id: 4,
      nombre: "Laura Chen",
      cargo: "Ingeniera de Productos",
      avatar: "https://placehold.co/80x80/510977/c7ae6a?text=LC",
  testimonio: "Para nuestros proyectos personalizados, la precisión es crucial. Earendil's Forge no solo cumple con los estándares técnicos más exigentes, sino que aporta soluciones creativas que optimizan nuestros diseños.",
      rating: 5,
  proyecto: "Serie de proyectos personalizados"
    },
    {
      id: 5,
      nombre: "Roberto Silva",
      empresa: "Cosplay Masters",
      cargo: "Cosplayer Profesional",
      avatar: "https://placehold.co/80x80/2d0259/c7ae6a?text=RS",
      testimonio: "Mi armadura de Mandalorian quedó perfecta. Los detalles, el acabado, la funcionalidad... Todo impecable. Gané tres concursos con esa armadura. Son unos genios de la impresión 3D.",
      rating: 5,
      proyecto: "Armadura completa + accesorios"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonio((prev) => (prev + 1) % testimonios.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonios.length]);

  const goToTestimonio = (index) => {
    setCurrentTestimonio(index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-surface">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            style={{ fontFamily: 'var(--font-title)' }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-body)'
            }}
          >
            Desde makers independientes hasta empresas y particulares, todos confían en nuestra forja
          </p>
        </div>

        {/* Testimonio principal */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="relative p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: 'var(--color-bg)' }}
          >
            {/* Decoración de fondo eliminada por solicitud del usuario */}

            {/* Contenido del testimonio */}
            <div className="relative z-10">
              {/* Quote superior */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-gradient opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Testimonio y rating */}
                <div className="md:col-span-2">
                  <blockquote 
                    className="text-lg md:text-xl leading-relaxed mb-6"
                    style={{ 
                      color: 'var(--color-text)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    "{testimonios[currentTestimonio].testimonio}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 text-yellow-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <span className="text-sm opacity-70 ml-2">
                      ({testimonios[currentTestimonio].rating}/5)
                    </span>
                  </div>

                  {/* Proyecto */}
                  <div className="mb-4">
                    <span 
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ 
                        background: 'var(--color-surface)',
                        color: 'var(--color-text-muted)'
                      }}
                    >
                      Proyecto: {testimonios[currentTestimonio].proyecto}
                    </span>
                  </div>
                </div>

                {/* Avatar e información */}
                <div className="text-center md:text-right">
                  <div className="inline-block relative mb-4">
                    <img
                      src={testimonios[currentTestimonio].avatar}
                      alt={testimonios[currentTestimonio].nombre}
                      className="w-20 h-20 rounded-full mx-auto shadow-lg"
                    />
                    {/* Badge de verificado */}
                    <div 
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--gradient-primary)' }}
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h4 
                    className="text-xl font-bold text-gradient mb-1"
                    style={{ fontFamily: 'var(--font-title)' }}
                  >
                    {testimonios[currentTestimonio].nombre}
                  </h4>
                  <p 
                    className="text-sm font-medium mb-1"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {testimonios[currentTestimonio].cargo}
                  </p>
                  <p 
                    className="text-sm opacity-70"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {testimonios[currentTestimonio].empresa}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonio(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonio ? 'scale-125' : 'scale-100 opacity-60'
                }`}
                style={{
                  background: index === currentTestimonio 
                    ? 'var(--color-primary)' 
                    : 'rgba(255,255,255,0.3)',
                  boxShadow: index === currentTestimonio 
                    ? `0 0 15px var(--color-primary)` 
                    : 'none'
                }}
              />
            ))}
          </div>
        </div>

  {/* Estadísticas removidas por solicitud del usuario */}
      </div>
    </section>
  );
};

export default TestimoniosSection;