/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["Newsreader", "serif"],
        mono: ["'Source Code Pro'", "monospace"],
      },
      colors: {
        primary: "#1E2022",
        accent: "#C57A36",
        background: "#F4F4F4",
        steel: "#393E46",
      },
    },
  },
  plugins: [],
};
