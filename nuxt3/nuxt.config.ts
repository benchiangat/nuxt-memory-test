import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: '%s - test',
      title: 'test',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Global CSS: https://nuxt.com/docs/getting-started/configuration#css
  css: [],

  // Plugins to run before rendering page: https://nuxt.com/docs/getting-started/configuration#plugins
  plugins: [],

  // Auto import components: https://nuxt.com/docs/getting-started/configuration#components
  components: true,

  // Modules: https://nuxt.com/docs/getting-started/configuration#modules
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  // Build Configuration: https://nuxt.com/docs/getting-started/configuration#build
  build: {
    transpile: ['vuetify'],
  }
})
