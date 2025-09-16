// @ts-check

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// Configuración para soporte de resaltado de sintaxis Astro en Markdown
const markdownConfig = {
  syntaxHighlight: 'shiki',
  shikiConfig: {
    langs: ['astro'],
  },
};

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
  integrations: [react()]
});