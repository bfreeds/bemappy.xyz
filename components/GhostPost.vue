<template>
  <article class="post">
    <header class="opener">
      <figure />
      <h1 class="title">
        {{ post.title }}
      </h1>
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
    }
  },
  methods: {
    calculateReadingTime: function(post) {
      return readingTime(post, {
        minute: 'One minute read',
        minutes: '% minute read'
      })
    }
  }
}
</script>

<style>
</style>
