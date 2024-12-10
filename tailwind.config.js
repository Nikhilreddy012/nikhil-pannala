/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '96': '28rem'
      },
      maxWidth: {
        '80': '20rem'
      }
    },
  },
  plugins: [],
}