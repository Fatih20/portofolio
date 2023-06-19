/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        variableColorChange: {
          "0%": { color: "var(--startColor)" },
          "50%": { color: "var(--endColor)" },
          "100%": { color: "var(--startColor)" },
        },
        lostColorChange: {
          "0%": { color: "#fafafa" },
          "33%": { color: "#273445" },
          "66%": { color: "#1a1a1a" },
          "100%": { color: "#fafafa" },
        },
        "glow-pulse": {
          "0%": { "text-shadow": "0 0 7px #fff" },
          "50%": { "text-shadow": "0 0 0px #fff" },
          "100%": { "text-shadow": "0 0 7px #fff" },
        },
        lightColorChange: {
          "0%": { color: "#c6262e" },
          "14%": { color: "#f37329" },
          "28%": { color: "#f9c440" },
          "42%": { color: "#68b723" },
          "56%": { color: "#28bca3" },
          "70%": { color: "#3689e6" },
          "84%": { color: "#a56de2" },
          "100%": { color: "#c6262e" },
        },
      },
      animation: {
        lostColorChange: "lostColorChange 5s ease-in-out infinite",
        lightColorChange: "lightColorChange 20s ease-in-out infinite",
        variableColorChange: "variableColorChange 5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        headerHeight: "4rem",
        horizontalPaddingDesktop: "1rem",
        horizontalPaddingMobile: "1.5rem",
      },
      minHeight: {
        cardDesktop: "12rem",
        cardMobile: "16rem",
      },
      boxShadow: {
        hoveredCard: "0 0 60px -15px rgba(0, 0, 0, 0.3)",
      },
      scale: {
        101: "1.01",
      },
    },
    colors: {
      transparent: "#fafafa00",
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
      background: "#1a1a1a",
      "black-900": "#000000",
      black: "#333333",
    },
  },
  plugins: [],
};
