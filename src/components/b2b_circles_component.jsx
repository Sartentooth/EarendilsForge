import React, { useState } from 'react';

const B2BCircles = () => {
  const [activeCircle, setActiveCircle] = useState(null);

  const servicios = [
    {
      id: 'impresoras',
      titulo: 'Impresoras 3D',
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      descripcion: 'Equipos profesionales de última generación',
      detalles: [
        'Impresoras FDM desde Consultar',
        'Impresoras de Resina desde Consultar', 
        'Garantía extendida y soporte técnico',
        'Capacitación incluida'
      ],
      color: '#dc2626'
    },
    {
      id: 'filamentos',
      titulo: 'Filamentos',
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
        </svg>
      ),
      descripcion: 'Materiales premium para cada aplicación',
      detalles: [
        'PLA+ - Ideal para principiantes',
        'ABS Professional - Resistente al calor',
        'PETG Cristal - Transparente y fuerte',
        'TPU Flexible - Para objetos elásticos',
        'Resinas especializadas desde '
      ],
      color: '#059669'
    },
    {
      id: 'repuestos',
      titulo: 'Repuestos',
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      descripcion: 'Todo lo que necesitás para mantener tu equipo',
      detalles: [
        'Nozzles de acero endurecido - Consultar',
        'Camas calientes de repuesto - Consultar',
        'Motores paso a paso - Consultar',
        'Sensores de filamento - Consultar',
        'Kits de mantenimiento Consultar'
      ],
      color: '#7c3aed'
    },
    {
      id: 'consultoria',
      titulo: 'Consultoría',
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      descripcion: 'Acompañamiento profesional para tu proyecto',
      detalles: [
        'Análisis de viabilidad de proyectos',
        'Optimización de procesos productivos',
        'Capacitación de equipos técnicos',
        'Desarrollo de productos personalizados',
        'Soporte técnico 24/7 disponible'
      ],
      color: '#f59e0b'
    }
  ];

  const toggleCircle = (id) => {
    setActiveCircle(activeCircle === id ? null : id);
  };

  return (
    <div className="relative">
      {/* Grid de círculos */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {servicios.map((servicio, index) => (
          <div key={servicio.id} className="flex flex-col items-center">
            {/* Círculo principal */}
            <button
              onClick={() => toggleCircle(servicio.id)}
              className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                activeCircle === servicio.id 
                  ? 'scale-110 shadow-2xl' 
                  : 'hover:scale-105 hover:shadow-xl'
              }`}
              style={{
                background: activeCircle === servicio.id 
                  ? `linear-gradient(135deg, ${servicio.color}, ${servicio.color}aa)`
                  : 'var(--gradient-surface)',
                boxShadow: activeCircle === servicio.id 
                  ? `0 0 40px ${servicio.color}66`
                  : '0 8px 25px rgba(0,0,0,0.3)'
              }}
            >
              {/* Anillo animado */}
              <div 
                className={`absolute inset-0 rounded-full border-4 ${
                  activeCircle === servicio.id ? 'animate-ping opacity-20' : 'opacity-0'
                }`}
                style={{ borderColor: servicio.color }}
              />
              
              {/* Icono */}
              <div className="text-white">
                {servicio.icono}
              </div>
            </button>

            {/* Título */}
            <h3 
              className={`mt-4 text-lg font-semibold text-center transition-colors duration-300 ${
                activeCircle === servicio.id ? 'text-gradient' : 'text-theme-text'
              }`}
              style={{ fontFamily: 'var(--font-title)' }}
            >
              {servicio.titulo}
            </h3>

            {/* Descripción breve */}
            <p 
              className="mt-2 text-sm text-center opacity-70"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--color-text-muted)'
              }}
            >
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>

      {/* Panel de información expandible */}
      {activeCircle && (
        <div 
          className="mt-8 p-8 rounded-2xl shadow-2xl transition-all duration-500 transform"
          style={{ 
            background: 'var(--gradient-surface)',
            border: `2px solid ${servicios.find(s => s.id === activeCircle).color}66`
          }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Header del panel */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${servicios.find(s => s.id === activeCircle).color}, ${servicios.find(s => s.id === activeCircle).color}aa)`
                  }}
                >
                  <div className="text-white">
                    {servicios.find(s => s.id === activeCircle).icono}
                  </div>
                </div>
                <div>
                  <h3 
                    className="text-3xl font-bold text-gradient"
                    style={{ fontFamily: 'var(--font-title)' }}
                  >
                    {servicios.find(s => s.id === activeCircle).titulo}
                  </h3>
                  <p 
                    className="text-lg opacity-80"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {servicios.find(s => s.id === activeCircle).descripcion}
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => setActiveCircle(null)}
                className="p-2 rounded-full hover:bg-red-500 hover:bg-opacity-20 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Contenido del panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lista de detalles */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gradient">Qué incluye:</h4>
                <ul className="space-y-3">
                  {servicios.find(s => s.id === activeCircle).detalles.map((detalle, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: servicios.find(s => s.id === activeCircle).color }}
                      />
                      <span 
                        className="text-theme-text-muted"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {detalle}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center">
                <div 
                  className="p-6 rounded-xl text-center"
                  style={{ background: 'var(--color-bg)' }}
                >
                  <h4 className="text-xl font-semibold mb-3 text-gradient">¿Interesado?</h4>
                  <p className="text-sm mb-6 opacity-80">
                    Consultá precios, disponibilidad y opciones de financiación
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="/EarendilsForge/contacto"
                      className="block w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                      style={{ 
                        background: `linear-gradient(135deg, ${servicios.find(s => s.id === activeCircle).color}, ${servicios.find(s => s.id === activeCircle).color}aa)`,
                        color: 'white'
                      }}
                    >
                      Solicitar Cotización
                    </a>
                    <a 
                      href="https://wa.me/+5491169645793"
                      target="_blank"
                      className="block w-full py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105"
                      style={{ 
                        borderColor: servicios.find(s => s.id === activeCircle).color,
                        color: servicios.find(s => s.id === activeCircle).color
                      }}
                    >
                      WhatsApp Directo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Información adicional */}
      {!activeCircle && (
        <div className="text-center mt-12">
          <p 
            className="text-lg opacity-70 mb-4"
            style={{ 
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-muted)'
            }}
          >
            Hacé click en cualquier círculo para ver más detalles
          </p>
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full opacity-40"
                style={{ 
                  background: 'var(--color-primary)',
                  animation: `pulse 1.5s ease-in-out infinite ${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default B2BCircles;