/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'custom-background': '#faeee7',
        'custom-text': '#33272a',
        'custom-button': '#ff8ba7',
        'custom-white': '#fffffe',
      },
    },
  },
  plugins: [],
}
