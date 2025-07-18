import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-3 py-6 sm:flex sm:items-center sm:justify-between bg-slate-900 shadow-md">
        <section className="flex justify-between items-center h-16">
          <a href="/EarendilsForge/" 
          className="text-2xl font-bold text-amber-400 hover:text-amber-300">
            Earendil’s Forge
          </a>

          <button
            className="sm:hidden text-amber-400 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-6 w-6 fill-current"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </section>

        {/* Menú: mobile y desktop */}
        <div
          className={`${
            open ? "block" : "hidden"
          } sm:flex flex-col items-start mt-3 gap-4 sm:flex-row sm:m-0`}
        >
          <a href="/EarendilsForge/" className="block py-2 hover:text-amber-300">
            Inicio
          </a>
          <a href="/EarendilsForge/quienes-somos" className="block py-2 hover:text-amber-300">
            Quiénes somos
          </a>
          <a href="/EarendilsForge/productos" className="block py-2 hover:text-amber-300">
            Productos
          </a>
          <a href="/EarendilsForge/galeria" className="block py-2 hover:text-amber-300">
            Galería
          </a>
          <a href="/EarendilsForge/contacto" className="block py-2 hover:text-amber-300">
            Contacto
          </a>
        </div>
    </nav>
  );
}
