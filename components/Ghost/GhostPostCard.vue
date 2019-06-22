<template>
  <article class="post-card">
    <h3>{{ post.title }}</h3>
    <img :src="post.feature_image" alt="">
    <p class="reading-time">
      {{ readingTime }}
    </p>
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
.post-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  background-color: transparentize($gray0, 0.7);
}

.post-card:hover {
  box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07),
    1px 6px 12px rgba(39, 44, 49, 0.04);
  transition: all 0.4s ease;
  transform: translate3D(0, -1px, 0) scale(1.02);
}
</style>
