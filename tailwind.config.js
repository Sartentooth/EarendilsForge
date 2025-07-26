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
      }
    },
  },
  plugins: [],
}
