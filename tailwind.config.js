/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      /* halo radial */
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 70%)',
        'gradient-section':
          'linear-gradient(to bottom, #0e1522 0%, #0a0f1a 100%)',
      },

      /* paleta de azul-petróleo */
      colors: {
        'hero-top': '#0d121d',
        'hero-mid': '#0b1624',
        'hero-bot': '#070b12',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};