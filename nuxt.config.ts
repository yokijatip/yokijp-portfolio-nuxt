// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Garamond: [400],
      // add Manrope Font 200 to 800
      Manrope: [200, 300, 400, 500, 600, 700, 800],
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      // Add Pinyon Script
      "Pinyon Script": [400],
    },
  },
});
