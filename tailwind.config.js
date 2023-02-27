/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideleft: 'slideleft 1s ease-in'
      },
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        black75: 'hsla(0, 0%, 0%, 75%)',
        darkColor: '#141519'
      },
      keyframes: {
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-100%)' },
          to: { opacity: 1, transform: 'none' }
        }
      }
    },
  },
  plugins: [],
}