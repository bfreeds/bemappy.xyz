// blog home page

<template>
  <!-- blog home header -->
  <section class="container">
    <header class="blog-header">
      <h1 class="emoji">
        🗺
      </h1>
      <div class="titles">
        <h1 class="page-title">
          mappenings 'n things 
        </h1>
        <h3 class="page-subtitle">
          writing, code, cartography, etc.
        </h3>
      </div>
      <h1 class="emoji">
        💌
      </h1>
    </header>

    <!-- post-card feed -->
    <div class="post-feed">
      <!-- dynamically render GhostPostCards based on post data -->
      <article v-for="(post, index) in posts" :key="index">
        <NuxtLink
          :to="$route.path + '/' + post.slug"
        >
          <GhostPostCard :post="post" />  
        </nuxtlink>
      </article>
    </div>
  </section>
</template>

<script>
import GhostPostCard from '~/components/Ghost/GhostPostCard.vue'
export default {
  components: {
    GhostPostCard
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.blog-header {
  margin: 0 auto;
  padding-bottom: 1.5rem;
  color: $gray5;
  display: flex;
}
.titles {
  padding: 0 1.5rem;
}

.link {
  padding-top: 10px;
}

ul {
  list-style: none;
}
</style>
