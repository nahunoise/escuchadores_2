import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'en', // El inglés es el idioma principal por defecto
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false // Hace que el inglés NO tenga el prefijo /en/ en las URLs
    }
  }
});