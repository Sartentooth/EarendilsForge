import { useEffect, useRef, useState } from "react";

const ProductosTopCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const intervalRef = useRef(null);

  const productos = [
    {
      id: 1,
      nombre: "Dragón Articulado Premium",
      precio: "$15,000",
      imagen: "./galeria/galeria_img_dragon_articulado.webp",
    },
    {
      id: 2,
      nombre: "Tigres Articulados Premium",
      precio: "$25,000",
      imagen: "./galeria/galeria_img_tigres_articulados.webp",
    },
    {
      id: 3,
      nombre: "Set Miniaturas D&D",
      precio: "$8,500",
      imagen: "./galeria/galeria_img_minis_d&d_set.webp",
    },
    {
      id: 4,
      nombre: "Malla Bandera Argentina",
      precio: "$8,500",
      imagen: "./galeria/galeria_img_bandera_argentina_malla.webp",
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

  return (
<div className="relative w-full max-w-[1024px] mx-auto">
  {/* Imagen */}
  <div
    className="relative h-64 sm:h-80 md:h-[60vh] lg:h-[75vh] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
    onMouseEnter={() => setIsAutoPlay(false)}
    onMouseLeave={() => setIsAutoPlay(true)}
    onClick={() => setIsZoomed(true)}
  >
    <img
      src={productos[currentIndex].imagen}
      alt={productos[currentIndex].nombre}
      className="w-full h-full object-contain rounded-2xl transition-all duration-700"
    />
        {/* Botón en la esquina */}
        <button
          className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm hover:bg-black/80 transition"
          onClick={(e) => {
            e.stopPropagation();
            const phoneNumber = "+5491169645793"; // número con código de país (ejemplo Argentina)
            const message = encodeURIComponent(
              `Hola! Quiero consultar por el producto: ${productos[currentIndex].nombre}`
            );
            window.open(
              `https://wa.me/${phoneNumber}?text=${message}`,
              "_blank"
            );
          }}
        >
          COMPRAR
        </button>
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
        style={{ background: "transparent" }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
        style={{ background: "transparent" }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {productos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "scale-125" : "scale-100 opacity-60"
            }`}
            style={{
              background:
                index === currentIndex
                  ? "var(--color-primary)"
                  : "rgba(255,255,255,0.5)",
              boxShadow:
                index === currentIndex
                  ? `0 0 15px var(--color-primary)`
                  : "none",
            }}
          />
        ))}
      </div>

      {/* Modal zoom */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          <img
            src={productos[currentIndex].imagen}
            alt={productos[currentIndex].nombre}
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ProductosTopCarousel;
