// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => config.plugins.push(vuetify()))
    }
  ],
  // typescript: {shim:false},
  build: {transpile:['vuetify']},
  vite: { ssr: { noExternal: ['vuetify']}},
  imports: {
    dirs: ['./stores']
  },
  pinia: {
    autoImports: ['defineStore', 'mapeStores', 'acceptHMRUpdate'],
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  }
})
