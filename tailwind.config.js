/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#BD1F17",
        white: "#FFFFFF",
        duskyWhite: "#F7F8F9",
        yellow: "#FEBF00",
        darkYellow: "#a68f00",
        black: "#0A1425",
        pink: "#FBF7F2",
        pureBlack: "#000000",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "4rem",
          lg: "6.5rem",
          xl: "7rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
