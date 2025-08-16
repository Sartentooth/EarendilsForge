import { useEffect } from "react";

export default function GalleryScript() {
  useEffect(() => {
    function initGalleryFilters() {
      const buttons = document.querySelectorAll(".filter-btn");
      const items = document.querySelectorAll(".filter-item");
      if (!buttons.length || !items.length) return;

      buttons.forEach((btn) => {
        const el = btn;
        // si ya tiene el flag, no volver a enganchar
        if (el.dataset.bound === "true") return;

        const handleClick = () => {
          const filter = el.dataset.filter || "";
          items.forEach((item) => {
            item.classList.toggle(
              "hidden",
              !(filter === "all" || item.classList.contains(filter))
            );
          });
        };

        el.addEventListener("click", handleClick);

        // marcar que este botón ya tiene listener
        el.dataset.bound = "true";
      });

      console.log("[galería] listeners listos (sin duplicar)");
    }

    // Ejecutar al montar
    initGalleryFilters();

    // Ejecutar también en eventos de Astro SPA
    document.addEventListener("astro:page-load", initGalleryFilters);
    document.addEventListener("astro:after-swap", initGalleryFilters);

    // Cleanup
    return () => {
      document.removeEventListener("astro:page-load", initGalleryFilters);
      document.removeEventListener("astro:after-swap", initGalleryFilters);
    };
  }, []);

  return null;
}

