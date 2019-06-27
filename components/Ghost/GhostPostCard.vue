<template>
  <article class="post-card">
    <img class="figure" :src="post.feature_image" alt="">
    <div class="post-card-content">
      <header>
        <p class="primary-tag tag">
          {{ post.primary_tag.name }}
        </p>
        <h2 class="title">
          {{ post.title }}
        </h2>
      </header>
    </div>

    <section class="post-card-excerpt">
      {{ post.excerpt }}
    </section>

    <footer class="post-card-meta">
      <p class="reading-time">
        {{ readingTime }}
      </p>
    </footer>
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
  margin: 0 20px 5vw;
  background-color: transparentize($gray0, 0.7);
  border-radius: 5px;
}
.figure {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.title {
  font-weight: 600;
}
.post-card:hover {
  box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07),
    1px 6px 12px rgba(39, 44, 49, 0.04);
  transition: all 0.4s ease;
  transform: translate3D(0, -1px, 0) scale(1.02);
}
</style>
