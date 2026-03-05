/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        magenta: {
          500: '#E91E63',
          600: '#D81B60',
          700: '#C2185B',
        },
      },
    },
  },
  plugins: [],
};
