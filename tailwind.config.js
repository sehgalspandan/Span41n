/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    
    extend: {
      fontFamily: {
        'comf':['"Poppins"'],
        'cursive':['"Cursive"']
      }
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
}