/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    colors: {
      "silver-100": "#fafafa",
      "silver-300": "#d4d4d4",
      "silver-500": "#abacae",
      "silver-700": "#7e8087",
      "silver-900": "#555761",
      silver: "#abacae",
      "slate-100": "#95a3ab",
      "slate-300": "#667885",
      "slate-500": "#485a6c",
      "slate-700": "#273445",
      "slate-900": "#0e141f",
      slate: "#485a6c",
      "black-100": "#666666",
      "black-300": "#4d4d4d",
      "black-500": "#333333",
      "black-700": "#1a1a1a",
      "black-900": "#000000",
      black: "#333333",
    },
  },
  plugins: [],
};
