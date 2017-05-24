const axios = require('axios')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tom Meagher',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Building beautifully usable Internet things.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900|Inconsolata' }
    ]
  },
  /*
  ** CSS configuration
  */
  css: [
    { src: '~assets/scss/_variables.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1BB580' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    extend (config, ctx) {
      /*
      ** Run ESLINT on save
      */
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      /*
      ** Parse Markdown Front Matter
      */
      config.module.rules.push({
        test: /\.md$/,
        exclude: /(node_modules)/,
        use: [
          {loader: 'json-loader'},
          {loader: 'front-matter-loader'}
        ]
      })
    }
  },
  generate: {
    routes: function () {
      const fs = require('fs')
      const POSTS_DIR = '~static/blog/posts'
      const posts = fs.readdirSync(POSTS_DIR)
      const postRoutes = posts.map(post => {
        const tokens = post.split('-')
        const year = tokens[0]
        const month = tokens[1]
        const day = tokens[2]
        return `/blog/${year}/${month}/${day}/${post.split('.')[0]}`
      })
      return postRoutes
    }
  }
}
