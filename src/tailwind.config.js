/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF9C01",
        grayDark: "#57636C",
        grayLight: "#F5F5F5",
        grayBorder: "#D9D9D9",
      },
    },
  },
  plugins: [],
}
