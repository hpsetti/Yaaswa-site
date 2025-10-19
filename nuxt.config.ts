// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  runtimeConfig: {
    // Private keys (only available on server-side)
    emailUser: process.env.EMAIL_USER || "",
    emailPass: process.env.EMAIL_PASS || "your-app-password-here",

    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || "Sri Devi Constructions",
    },
  },
  head: {
    title: "Sri Devi Constructions", // Other meta information,
  },
  app: {
    baseURL: "Yaaswa-site/",
  },
});
