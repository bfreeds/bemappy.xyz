const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /* Dynamically generate routes for blog posts */
  generate: {
    routes: ['/posts/1']
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~assets/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/contentful'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/google-analytics'
  ],
  styleResources: {
    scss: ['~assets/style/_variables.scss']
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  // for development, env variables set with .env file
  // for prod, env variables set in Netlify app console
  ghost: {
    apiUrl: process.env.GHOST_API_URL,
    contentApiKey: process.env.GHOST_CONTENT_API_KEY
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      // dotenv fs error fix
      config.node = {
        fs: 'empty'
      }
    }
  }
}
