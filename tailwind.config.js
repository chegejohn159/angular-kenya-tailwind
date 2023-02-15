/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'buttons': '48px',
      },
      colors:{
        'github-black': '#0E1117',

      }
    },
  },
  plugins: [],
}
