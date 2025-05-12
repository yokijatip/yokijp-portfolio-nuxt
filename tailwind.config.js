/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        garamond: ["Garamond", "serif"],
        "pinyon-script": ["Pinyon Script", "cursive"],
      },
      colors: {
        primary: "#f7f5ed",
        "base-dark": "#121111",
        "base-light": "#F7FAFC",
      },
    },
  },
  plugins: [],
};
