/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // No Tailwind v4, usamos este pacote específico para o PostCSS
    '@tailwindcss/postcss': {},
    'autoprefixer': {},
  },
};

export default config;