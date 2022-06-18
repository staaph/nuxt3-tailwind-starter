import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: { classSuffix: '' }
})
