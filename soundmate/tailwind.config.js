/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        logo: {
          100: "#f7f7f7",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#b2b2b2",
          500: "#919191",
          600: "#828282",
          700: "#565656",
          800: "#414141",
          900: "#2c2c2c",
        },
      },
    },
  },
  plugins: [],
}

