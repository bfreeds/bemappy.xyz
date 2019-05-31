// blog home page
<template>
  <section class="container">
    <div>
      <h1>Mappenings 'n things.</h1>
      <h3>Writing, design, code, etc.</h3>
    </div>
    <ul>
      <li v-for="(post, index) in posts" :key="index" class="link">
        <NuxtLink :to="post.id">
          {{ post.title + post.id }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('setPosts', params.slug)
  }
}
</script>

<style scoped>
.container {
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.link {
  padding-top: 10px;
}

ul {
  list-style: none;
}
</style>
