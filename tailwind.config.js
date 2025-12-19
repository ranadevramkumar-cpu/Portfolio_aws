/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF9900", // AWS Orange
        background: "#0f172a", // Deep Navy
        secondary: "#232f3e", // AWS Dark Blue
        accent: "#38bdf8", // Light Blue
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
