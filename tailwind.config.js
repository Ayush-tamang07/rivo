/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':"#224F34",
        'secondary':"#A9D4BA",
        'highlight':"#A3F3BE",
        'primary-hover': '#37C87A' 
      }
    },
  },
  plugins: [],
}