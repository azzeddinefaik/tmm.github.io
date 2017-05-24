<template>
  <div>
    <time>{{ date | prettyDate }}</time>
    <h1>{{ title }}</h1>
    <html-parser :content="body"></html-parser>
  </div>
</template>

<script>
import { markdown } from 'markdown'
import HtmlParser from '~components/HtmlParser.vue'
import { prettyDate } from '../../../../../filters'

export default {
  async asyncData ({ context, route, store, error }) {
    const postContext = require.context('~static/blog/posts', true, /^\.\/.*\.md$/)
    const {year, month, day, slug} = route.params
    const postName = `${year}-${month}-${day}-${slug}`
    const post = postContext(`./${postName}.md`)
    const data = {
      title: post.attributes.title,
      date: post.attributes.date,
      body: markdown.toHTML(post.body),
      description: post.attributes.excerpt
    }
    return data
  },
  layout: 'blog',
  scrollToTop: true,
  head () {
    return {
      title: this.title,
      titleTemplate: '%s – Tom Meagher',
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  },
  components: {
    HtmlParser
  },
  filters: {
    prettyDate
  }
}
</script>
