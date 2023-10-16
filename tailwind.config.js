/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Amaranth, sans-serif",
        adanda: "Andada Pro, sans-serif",
        alfa: "Alfa Slab One, cursive",
      },
    },
  },
  plugins: [],
};
