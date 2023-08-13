/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html",
    "./public/styles/default.css",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'customBlue': '#535DA1',
      'customGreen': '#14AF93',
      
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  variants: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
      },
  },
}