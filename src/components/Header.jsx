import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Título */}
          <a
            href="/"
            className="text-2xl font-bold text-amber-400 hover:text-amber-300"
          >
            Eärendil’s Forge
          </a>

          {/* Botón móvil */}
          <button
            className="sm:hidden text-amber-400 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  open
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>

          {/* Menú de escritorio y mobile */}
          <div
            className={`sm:flex flex-col sm:flex-row sm:items-center gap-4 absolute sm:static top-16 left-0 w-full sm:w-auto bg-slate-900 px-4 py-4 sm:py-0 sm:gap-6 ${
              open ? 'block' : 'hidden sm:block'
            }`}
          >
            <a href="/" className="block hover:text-amber-300">Inicio</a>
            <a href="/quienes-somos" className="block hover:text-amber-300">Quiénes somos</a>
            <a href="/productos" className="block hover:text-amber-300">Productos</a>
            <a href="/galeria" className="block hover:text-amber-300">Galería</a>
            <a href="/contacto" className="block hover:text-amber-300">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
