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
          500: '#F2F2EF',
        },
        green: {
          300: '#D4E3C6',
          500: '#D4E3C6',
        },
        brown: {
          300: '#aa825b',
          500: '#a2754b',
        },
        textColor: {
          300: '#330E3C'
        }
      },
    },
  },
  plugins: [],
};
