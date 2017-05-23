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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
      const POSTS_DIR = './blog/posts'
      const posts = fs.readdirSync(POSTS_DIR)
      const postRoutes = posts.map(post => `/blog/${post.split('.')[0]}`)
      return postRoutes
    }
  }
  // generate: {
  //   routeParams: {
  //     '/blog/:year/:month/:day/:slug': function (callback) {
  //       // auto generate dynamic router according to the static/*.md when generate static pages
  //       let fm = require('front-matter')
  //       let fs = require('fs')
  //       var params
  //       fs.readdir(POSTS_DIR, function (e, f) {
  //         params = f.map((v) => {
  //           if (/.+\.md/.test(v)) { return { p: v.substr(0, v.length - 3) } }
  //         }).filter((v) => {
  //           return v !== undefined
  //         })
  //         callback(null, params)
  //       })
  //     }
  //   }
  // }
}
