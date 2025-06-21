/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'purple': {
          DEFAULT: '#5D2E8C',
          'dark': '#2D1843',
          'light': '#F5F0FF',
        },
        'gold': {
          DEFAULT: '#DAB03C',
          'dark': '#B99029',
        },
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}