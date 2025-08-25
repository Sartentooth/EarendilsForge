import { useEffect, useRef, useState } from "react";

import { withBase } from "../utils/base";

const ProductosTopCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  const productos = [
    {
      id: 1,
      nombre: "Filamentos e Insumos",
      imagen: withBase("galeria/desktop/hero-insumos.webp"),
      imagenMobile: withBase("galeria/mobile/hero-insumos-mobile.webp"),
    },
    {
      id: 2,
      nombre: "Stormtrooper Articulados",
      imagen: withBase("galeria/desktop/hero-stormtroopers.webp"),
      imagenMobile: withBase("galeria/mobile/hero-stormtroopers-mobile.webp"),
    },
    {
      id: 3,
      nombre: "Mascotas Personalizadas",
      imagen: withBase("galeria/desktop/hero-mascotas.webp"),
      imagenMobile: withBase("galeria/mobile/hero-mascotas-mobile.webp"),
    },
    {
      id: 4,
      nombre: "Impresoras 3D",
      imagen: withBase("galeria/desktop/hero-impresoras.webp"),
      imagenMobile: withBase("galeria/mobile/hero-impresoras-mobile.webp"),
    },
  ];

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % productos.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlay, productos.length]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % productos.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + productos.length) % productos.length);
  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="relative w-full overflow-hidden min-h-[55vh] md:min-h-[70vh]">
      {/* Badge con animación */}
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white px-4 py-1 rounded-full text-xs md:text-sm uppercase tracking-widest z-20 animate-[fadeSlideIn_0.6s_ease-out]">
        Más buscados
      </div>

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <img
          src={productos[currentIndex].imagen}
          srcSet={`
          ${productos[currentIndex].imagenMobile} 720w,
          ${productos[currentIndex].imagen} 2513w
          `}
          sizes="(max-width: 768px) 0px, 2351px"
          alt={productos[currentIndex].nombre}
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/15 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 flex sm:items-center md:items-start flex-col gap-3 max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg leading-tight">
          {productos[currentIndex].nombre}
        </h2>

        <button
          className="relative px-8 py-3 border border-white text-white uppercase tracking-wider font-semibold overflow-hidden transition-all duration-300 group"
          onClick={() => {
            const phoneNumber = "+5491169645793";
            const message = encodeURIComponent(
              `Hola! Quiero consultar por el producto: ${productos[currentIndex].nombre}`
            );
            window.open(
              `https://wa.me/${phoneNumber}?text=${message}`,
              "_blank"
            );
          }}
        >
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          <span className="absolute left-0 top-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full delay-150"></span>
          <span className="absolute right-0 top-0 w-[2px] h-0 bg-white transition-all duration-300 group-hover:h-full delay-300"></span>
          <span className="absolute left-0 bottom-0 w-[2px] h-0 bg-white transition-all duration-300 group-hover:h-full"></span>
          <span className="relative z-10">Consultar</span>
        </button>
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-all duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-all duration-300"
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {productos.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-10 bg-white" : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductosTopCarousel;
