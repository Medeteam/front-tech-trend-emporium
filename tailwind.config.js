/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens:{
        mobile: '300px'
      },
      colors:{
          antiWhite: '#F1F1F1',
          timberWolf: '#D7CDCC',
          emeraldGreen: '#6DD2A5',
          uclaBlue: '#2274A5',
          smokyBlack: '#14110F'
        },
    },
  },
  plugins: [],
};
