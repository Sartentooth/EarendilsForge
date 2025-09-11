import { useEffect } from 'react';

export default function EcwidStore() {
  useEffect(() => {
    // Función para inicializar Ecwid
    function initEcwid() {
      // Limpia los contenedores primero
      const categoriesDiv = document.getElementById('my-categories-123615503');
      const storeDiv = document.getElementById('my-store-123615503');
      
      if (categoriesDiv) categoriesDiv.innerHTML = '';
      if (storeDiv) storeDiv.innerHTML = '';

      // Remueve script anterior si existe
      const existingScript = document.querySelector('script[src*="ecwid.com"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Crea nuevo script
      const script = document.createElement("script");
      script.src = "https://app.ecwid.com/script.js?123615503&data_platform=code";
      script.async = true;
      script.onload = () => {
        if (window.xCategoriesV2) {
          window.xCategoriesV2("id=my-categories-123615503");
        }
        if (window.xProductBrowser) {
          window.xProductBrowser(
            "categoriesPerRow=3",
            "views=grid(20,3) list(60) table(60)",
            "categoryView=grid",
            "searchView=list",
            "id=my-store-123615503"
          );
        }
      };
      document.body.appendChild(script);
    }

    // Inicializa Ecwid cuando el componente se monta
    initEcwid();

    // Cleanup function
    return () => {
      const script = document.querySelector('script[src*="ecwid.com"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
        Earendil's Forge Store
      </h1>

      <div id="my-categories-123615503"></div>
      <div id="my-store-123615503"></div>
    </section>
  );
}

// <!-- ---
// // Importamos el HTML de la tienda
// import tiendaHtml from '../pages/store.html?raw';
// ---

// <div class="store-wrapper" set:html={tiendaHtml}></div>

// <style>
// .store-wrapper {
//   width: 100%;
//   max-width: 1600px; /* Ajusta según tu diseño */
//   margin: 0 auto;
// }

// /* Media queries para mobile */
// @media (max-width: 768px) {
//   .store-wrapper {
//     padding: 0 1rem;
//   }
// }
// </style> -->