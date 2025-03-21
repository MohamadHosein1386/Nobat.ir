/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          500: "#00bfd6",
        },
        footer: {
          500: "#3ab1d4"
        },
        btnLogin: {
          200: "#03b2c7"
        }
      },
      screens: {
        "custom": { "min": "768px" },
        "max-with": { "max": "768px" },
        "274px": { "min": "400px" }
      }
    },
  },
  plugins: [],
}

