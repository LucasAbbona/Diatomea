//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
      },
    },
    colors: {
      bg: {
        page: "#FFFFFF",
        navBar: "#FFFCF7"
      },
      primary:{
        darkGrey: "#403F3E",
        grey: "#737272",
        lightGrey: "#D9D6D2",
        lighterGrey: "#BFBBB8",
      },
      secondary:{
        darkBrown: "#C4A281",
        brown: "#E2C3AA",
        lightBrown: "#DAC3B1",
        lighterBrown: "#C5A691",
      },
    },
  },
  plugins: [],
};
