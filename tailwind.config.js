/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        futuraBold: ['"Futura Bold"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
