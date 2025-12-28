import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://martingierlinger.github.io',
  base: '/tealinger',
  vite: {
    plugins: [tailwindcss()]
  }
});