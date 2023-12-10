// https://nuxt.com/docs/api/configuration/nuxt-config
import {createResolver} from '@nuxt/kit'

const {resolve} = createResolver(import.meta.url)

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
      '@pinia/nuxt',
      'nuxt-swiper'
    ],
    // @ts-ignore
    css: [
        // resolve('./assets/scss/_normalize.scss'),
        // resolve('./assets/scss/_fonts.scss'),
        resolve('./assets/scss/_variables.scss'),
        resolve('./assets/scss/main.scss'),
    ],
    app: {
        head: {
            title: 'Online-store',
            meta: [
                {
                    name: 'description',
                    content: 'Everything about nuxt-3 and vue-3'
                }
            ],
            link: [
                // {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                // {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
                // {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap'}
            ]
        }
    },
    pinia: {
      autoImports: [['defineStore', 'definePiniaStore']],
    },

})
