// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.BASE_URL || "/traveldino-website/",
  },
  css: ["@/assets/css/main.css"],
});
