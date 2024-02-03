// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/traveldino-website/" || "/",
  },
  css: ["@/assets/css/main.css"],
  runtimeConfig: {
    public: {
      REPOSITORY_PATH: process.env.REPOSITORY_PATH || "/",
    },
  },
});
