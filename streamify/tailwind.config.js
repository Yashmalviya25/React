/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('/src/public/images/bg.jpg')",
      }
    },
  },
  plugins: [],
}

