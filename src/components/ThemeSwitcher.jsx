import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('amber');
  const [currentName, setCurrentName] = useState('Amber');
  const [currentIcon, setCurrentIcon] = useState('🟡');
  const [isOpen, setIsOpen] = useState(false);

  // Lista de todos los temas disponibles
  const themes = [
    { id: 'amber', name: 'Amber Classic', icon: '🟡' },
    { id: 'fire', name: 'Fire & Steel', icon: '🔥' },
    { id: 'mystic', name: 'Mystic Purple', icon: '✨' },
    { id: 'forest', name: 'Forest Green', icon: '🌲' },
    { id: 'dragon', name: 'Dragon Gold', icon: '🐉' },
    { id: 'ice', name: 'Ice & Fire', icon: '❄️' }
  ];

  // Cargar tema guardado al inicializar el componente
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('earendils-forge-theme');
      const savedName = localStorage.getItem('earendils-forge-theme-name');
      const savedIcon = localStorage.getItem('earendils-forge-theme-icon');
      
      if (savedTheme && savedName && savedIcon) {
        setCurrentTheme(savedTheme);
        setCurrentName(savedName);
        setCurrentIcon(savedIcon);
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
    } catch (error) {
      console.warn('No se pudo cargar el tema desde localStorage:', error);
    }
  }, []);

  // Función para cambiar el tema
  const changeTheme = (theme, name, icon) => {
    setCurrentTheme(theme);
    setCurrentName(name);
    setCurrentIcon(icon);
    
    // Cambiar el atributo data-theme en el HTML
    document.documentElement.setAttribute('data-theme', theme);
    
    // Guardar en localStorage
    try {
      localStorage.setItem('earendils-forge-theme', theme);
      localStorage.setItem('earendils-forge-theme-name', name);
      localStorage.setItem('earendils-forge-theme-icon', icon);
    } catch (error) {
      console.warn('No se pudo guardar el tema en localStorage:', error);
    }
    
    // Cierra el dropdown
    setIsOpen(false);
  };

  // Función para abrir/cerrar el dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.theme-switcher-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative theme-switcher-container">
      {/* Botón principal */}
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-theme-primary text-theme-bg px-4 py-2 rounded-lg font-semibold hover:bg-theme-secondary transition-all"
        aria-label="Cambiar tema"
      >
        <span>{currentIcon}</span>
        <span>{currentName}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {/* Dropdown con todos los temas */}
      <div className={`theme-dropdown absolute right-0 mt-2 w-48 bg-theme-surface rounded-lg shadow-xl border border-theme-primary/20 z-50 ${isOpen ? 'show' : ''}`}>
        <div className="p-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => changeTheme(theme.id, theme.name, theme.icon)}
              className={`w-full text-left px-3 py-2 rounded-md hover:bg-theme-primary/20 flex items-center gap-3 text-theme-text transition-colors ${
                currentTheme === theme.id ? 'bg-theme-primary/10 border border-theme-primary/30' : ''
              }`}
              aria-label={`Cambiar a tema ${theme.name}`}
            >
              <span>{theme.icon}</span>
              <span>{theme.name}</span>
              {currentTheme === theme.id && (
                <span className="ml-auto text-theme-primary">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}