/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',
        gold: '#C9A84C',
        'gold-light': '#E8D5A3',
        cream: '#F5F0EB',
        charcoal: '#1C1C1E',
        'text-dark': '#1A1A1A',
        'text-muted': '#6B7280',
        'text-light': '#F5F0EB',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
