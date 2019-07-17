<template>
  <article class="post">
    <header class="opener">
      <figure class="lede-figure">
        <img :src="post.feature_image" alt="">
      </figure>
      <h1 class="title">
        {{ post.title }}
      </h1>
      <div class="share-buttons">
        <font-awesome :icon="['fab', 'twitter']" />
      </div>
      <span class="read-time">
        {{ readingTime }}
      </span>
    </header>

    <section class="body">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="post.html" />
    </section>
  </article>
</template>

<script>
import { readingTime } from '@tryghost/helpers'

export default {
  props: {
    post: { type: [Object, String], required: true }
  },
  computed: {
    readingTime: function() {
      return this.calculateReadingTime(this.post)
    },
    // filter out hidden tags
    publicTags: function() {
      return this.post.tags.filter(function(tag) {
        return tag.visibility === 'public'
      })
    }
  },
  methods: {
    calculateReadingTime: function(post) {
      return readingTime(post, {
        minute: '1 minute read',
        minutes: '% minute read'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding-bottom: 2rem;
}
.lede-figure {
  width: 100%;
}
</style>
