/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        primary: {
          500: '#f2eae7',
        },
        green: {
          300: '#1f473d',
          500: '#16433c',
        },
        brown: {
          300: '#aa825b',
          500: '#a2754b',
        },
      },
    },
  },
  plugins: [],
};
