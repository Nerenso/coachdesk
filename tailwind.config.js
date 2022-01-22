module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#FE6078",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
