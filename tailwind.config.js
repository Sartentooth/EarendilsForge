/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,astro,ts,jsx,tsx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        // Estos son los colores que van a cambiar dinámicamente
        'theme-primary': 'var(--color-primary)',
        'theme-secondary': 'var(--color-secondary)', 
        'theme-accent': 'var(--color-accent)',
        'theme-bg': 'var(--color-bg)',
        'theme-surface': 'var(--color-surface)',
        'theme-text': 'var(--color-text)',
        'theme-text-muted': 'var(--color-text-muted)',
      },
      // Gradientes personalizados
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-surface': 'var(--gradient-surface)',
        'gradient-button': 'var(--gradient-button)',
        'gradient-button-hover': 'var(--gradient-button-hover)',
      }
    },
  },
  plugins: [],
}