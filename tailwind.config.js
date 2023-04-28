/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: 'Nunito, sans-serif',
    },
    colors: {
      red: {
        300: '#FF1919',
        400: '#FF2800',
        500: '#CC1414',
      },
      black: {
        300: '#000000',
      },
      white: {
        300: '#FFFFFF'
      }
    }
  },
  plugins: [],
}
