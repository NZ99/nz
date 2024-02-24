/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      serif: [
        "Spectral",
        "Source Serif Pro",
        "Apple Garamond",
        "Baskerville",
        "Libre Baskerville",
        "Droid Serif",
        "Times New Roman",
        "Times",
        "serif",
        "ui-serif",
        "Noto Emoji",
        "Quivira",
      ],
      sans: ['Inter', 'Switzer', 'Georgia', 'Palatino', 'Source Serif Pro', 'sans-serif'],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    screens: {
      desktop: "1400px",
      tablet: "600px",
    },
    extend: {
      colors: {
        flint: {
          400: "#2a2f3c",
          500: "#333948",
        },
      },
    },
  },
  content: ["./build/**/*.html"],
  plugins: [require("@tailwindcss/typography")],
};
