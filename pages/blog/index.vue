// blog home page
<template>
  <section class="container">
    <header class="blog-header">
      <h1 class="page-title">
        mappenings 'n things
      </h1>
      <h3 class="page-subtitle">
        writing, code, cartography, etc.
      </h3>
    </header>
    </div>
    <ul>
      <li v-for="(post, index) in posts" :key="index" class="link">
        <NuxtLink :to="$route.path + '/' + post.id.toString()">
          {{ post.title }}
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
    await store.dispatch('setPosts')
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.blog-header {
  margin: 0 auto;
  padding-bottom: 1.5rem;
  color: $gray5;
}

.link {
  padding-top: 10px;
}

ul {
  list-style: none;
}
</style>
