import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  base: isGitHubPages ? '/EarendilsForge/' : '/',
  output: 'static',
  integrations: [
    react(),
    tailwind()
  ],
});