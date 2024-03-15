/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        color1: "#0F172A",
        color2: "#8EA0BA",
        color3: "#50C594",
        color4: "rgba(0, 0, 0, 0.2);",
      }
    },
  },
  plugins: [],
}

