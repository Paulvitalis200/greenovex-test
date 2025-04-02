/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        bebas: ["Bebas-Neue", "sans-serif"],
      },
      colors: {
        primary: "#1a365d",
        accent: "#2b6cb0",
        green: "#30BD32",
      },
    },
  },
  plugins: [],
};
