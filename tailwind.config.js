/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rodhi-red': '#DD0B39',
        'rodhi-blue': '#013593',
      },
    },
  },
  plugins: [],
};
