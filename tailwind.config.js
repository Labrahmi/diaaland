/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Kufi Arabic", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        handjet: ["Handjet", "sans-serif"],
        palanquin: ["Palanquin Dark", "sans-serif"],
      },
    },
  },
  plugins: [],
}

