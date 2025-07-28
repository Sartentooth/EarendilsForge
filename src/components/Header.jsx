import ThemeSwitcher from './ThemeSwitcher.jsx';
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-3 py-6 sm:flex sm:items-center sm:justify-between bg-gradient-surface shadow-xl">
        <section className="flex justify-between items-center h-16">
          <a href="/EarendilsForge/" 
          className="text-2xl font-bold text-gradient hover:scale-105 transition-transform flex items-center">
            <img src="symbol.svg" width="80" height="auto" alt="logo Earendil's Forge" className="mr-2 p-2" />
            Earendil's Forge
          </a>

          <button
            className="sm:hidden text-theme-primary focus:outline-none"
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
          } sm:flex flex-col items-start mt-3 gap-4 sm:flex-row sm:m-0 sm:items-center`}
        >
          <a href="/EarendilsForge/" className="block py-2 text-theme-text hover:text-theme-primary transition-colors">
            Inicio
          </a>
          <a href="/EarendilsForge/quienes-somos" className="block py-2 text-theme-text hover:text-theme-primary transition-colors">
            Quiénes somos
          </a>
          <a href="/EarendilsForge/productos" className="block py-2 text-theme-text hover:text-theme-primary transition-colors">
            Productos
          </a>
          <a href="/EarendilsForge/galeria" className="block py-2 text-theme-text hover:text-theme-primary transition-colors">
            Galería
          </a>
          <a href="/EarendilsForge/contacto" className="block py-2 text-theme-text hover:text-theme-primary transition-colors">
            Contacto
          </a>
          
          {/* Theme Switcher */}
          <div className="mt-2 sm:mt-0 sm:ml-4">
            <ThemeSwitcher />
          </div>
        </div>
    </nav>
  );
}