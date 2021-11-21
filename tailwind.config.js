module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#A2D2FF",
          400: "#FF865E",
          600: "#FEE440",
          300: "#FEF9EF",
          700: "#111",
          800: "#EEEEEE",
          200: "#9D9D9D",
        },
      },
      fontFamily: {
        myFont: ["Montserrat"],
      },
      borderWidth:{
        border1:"1px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
