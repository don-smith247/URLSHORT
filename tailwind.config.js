/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      screens:{
        'sm': {'min': '300px', 'max': '767px'},
        'lg': {'min': '1024px'},
        
      }
    },
  },
  plugins: [],
}