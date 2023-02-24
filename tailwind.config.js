/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "200px",
      },
      colors: {
        primary: "#facc15",
        secondary: "red",
      },
      boxShadow: {
        'dark-sm': '0 4px 8px 6px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', //White shadow
        blue: '0 1px 3px 0 rgba(0, 0, 255, 0.1), 0 1px 2px 0 rgba(0, 0, 255, 0.06)', //Blue shadow (for testing purposes)
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
  ],
  darkMode: "class",
};
