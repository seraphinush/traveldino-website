// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.REPOSITORY_PATH || "/",
  },
  css: ["@/assets/css/main.css"],
  runtimeConfig: {
    public: {
      ENVIRONMENT: process.env.REPOSITORY_PATH || "/",
    },
  },
});
