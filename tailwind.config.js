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
        300: '#D63615',
        400: '#ED110C',
        500: '#CC1414',
      },
      black: {
        300: '#0D0D0D',
      },
      white: {
        300: '#FFFFFF'
      }
    }
  },
  plugins: [],
}
