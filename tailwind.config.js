/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBrown: 'rgb(80, 63, 47)', // Add your color here
      },
    },
  },
  plugins: [],
}