<template>
  <div>
    <h1>{{ title }}</h1>
    <html-parser :content="body"></html-parser>
  </div>
</template>

<script>
import HtmlParser from '~components/HtmlParser.vue'

export default {
  async asyncData ({ context, route, store, error }) {
    const postContext = require.context('../../blog/posts', true, /^\.\/.*\.md$/)
    const post = postContext(`./${route.params.slug}.md`)
    let data = {
      title: post.attributes.title,
      body: post.body,
      description: post.attributes.excerpt
    }
    return data
  },
  scrollToTop: true,
  head () {
    return {
      title: this.title,
      titleTemplate: '%s - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  },
  components: {
    HtmlParser
  }
}
</script>
