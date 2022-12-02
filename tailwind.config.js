const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'myimg': 'url(../public/banner.jpg)'
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
};