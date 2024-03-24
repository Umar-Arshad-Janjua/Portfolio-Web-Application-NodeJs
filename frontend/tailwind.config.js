/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#DFF5FF",
        "secondary": "#211C6A",
        "tertiary" : "#030637"
      }
    },
    screens: {

      lg: {max: '2023px'},

      sm: {max: '1000px'},
     
    }
  },
  plugins: [],
}