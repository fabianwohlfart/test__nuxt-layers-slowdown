// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'node:path'
// const layer = resolve('./../utilities')
const layer = resolve('./../utilities')

export default defineNuxtConfig({
  compatibilityDate: '2024-12-03',
  devtools: { enabled: false },
  extends: [
    layer
  ],
  alias: {
    '@app': resolve('.'),
    '@layer': layer
  },
})
