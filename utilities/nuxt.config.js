import { fileURLToPath } from 'node:url'

/*
Following packages need to be installed:

> npm install -D 
*/
console.log('> Extending Utilities', fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  routeRules: {
    '/api/**': { cors: true }
  }
})