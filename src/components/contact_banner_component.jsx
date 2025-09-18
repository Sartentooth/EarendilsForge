import React from "react";
import { withBase } from "../utils/base";

// Componente de sección de llamada a la acción (CTA)

const CTASection = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background con patrón de forja */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-surface)" }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Ícono de forja animado */}
        <div className="mb-8">
          <div
            className="w-24 h-24 mx-auto rounded-full flex items-center justify-center relative"
            style={{ background: "var(--gradient-primary)" }}
          >
            {/* Anillos concéntricos animados */}
            <div className="absolute inset-0 rounded-full border-4 border-current opacity-20 animate-ping"></div>
            <div className="absolute inset-2 rounded-full border-2 border-current opacity-40 animate-pulse"></div>

            {/* Ícono principal */}
            <svg
              className="w-10 h-10 text-white relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        </div>

        {/* Título principal */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
          style={{ fontFamily: "var(--font-title)" }}
        >
          ¿Tenés una idea? <br className="hidden md:block" />
          ¡Forjémosla juntos!
        </h2>

        {/* Descripción */}
        <p
          className="text-xl mb-8 max-w-3xl mx-auto"
          style={{
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-body)",
          }}
        >
          Cada proyecto es único, cada idea merece vida. Desde el primer boceto
          hasta el objeto terminado, te acompañamos en cada paso del proceso
          creativo.
        </p>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-primary flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gradient mb-1">
              Respuesta Rápida
            </h3>
            <p className="text-sm opacity-70">
              Te respondemos en menos de 24 horas
            </p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-primary flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gradient mb-1">Sin Compromiso</h3>
            <p className="text-sm opacity-70">
              Presupuesto gratuito y detallado
            </p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-primary flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gradient mb-1">
              Hecho con Pasión
            </h3>
            <p className="text-sm opacity-70">
              Cada pieza lleva nuestro sello personal
            </p>
          </div>

          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-primary flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gradient mb-1">Asesoramiento</h3>
            <p className="text-sm opacity-70">
              Te guiamos desde la idea inicial
            </p>
          </div>
        </div>

        {/* Botones principales */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={withBase("contacto")}
            className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl bg-gradient-button text-white"
            style={{ fontFamily: "var(--font-title)" }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Contanos tu Proyecto
          </a>

          <a
            href="https://wa.me/+5491131067170"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl border-2 hover:bg-gradient-button hover:text-white"
            style={{
              fontFamily: "var(--font-title)",
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
            }}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690" />
            </svg>
            WhatsApp Directo
          </a>
        </div>

        {/* Información adicional */}
        <div
          className="p-8 rounded-xl max-w-xl mx-auto flex flex-col items-center text-center"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-surface)",
          }}
        >
          <h3 className="text-lg font-semibold mb-4 text-gradient">
            ¿Qué necesitamos saber?
          </h3>
          <ul className="mb-4 space-y-3 text-base w-full max-w-xs mx-auto">
            <li className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-primary inline-block"></span>
              <span>Descripción de tu idea</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-primary inline-block"></span>
              <span>Tamaño aproximado</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-primary inline-block"></span>
              <span>Material preferido</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-primary inline-block"></span>
              <span>Fecha tentativa de entrega</span>
            </li>
          </ul>
          <p className="text-xs opacity-70 mt-2">
            💡 <strong>Tip:</strong> Si tenés imágenes de referencia o bocetos,
            ¡subilos! Nos ayudan mucho.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
