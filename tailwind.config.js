module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      blue:{
        500:"#A2D2FF",
        400:"#FF865E",
        600:"#FEE440",
        300:"#FEF9EF",
        700:"#111",  
      },
    },
    extend: {
      fontFamily:{
        myFont:['Montserrat']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
