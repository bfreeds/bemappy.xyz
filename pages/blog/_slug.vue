// page for individual blog post

<template>
  <article class="post-wrapper">
    <GhostPost :post="post" />
  </article>
</template>

<script>
import GhostPost from '~/components/GhostPost.vue'
import ghostClient from '~/plugins/ghost'

export default {
  components: {
    GhostPost
  },

  // return asyncData from function so that content is unique per component, rather than shared.
  data() {
    return this.post
  },

  /** *  this is called in the browser - not when statically generated.
   see this discussion and look for Nuxt feature update for 100% static:  https://github.com/nuxt/nuxt.js/issues/1949  ***/
  async asyncData({ params }) {
    // eslint-disable-next-line no-console
    console.log('params', params.slug)

    // We can use async/await ES6 feature
    const post = await ghostClient.posts.read({
      slug: params.slug,
      include: 'tags, authors'
    })

    return { post: post }
  }
}
</script>

<style lang="scss" scoped>
article {
  max-width: 600px;
  padding: 10px;
}

.lead-art {
  max-width: 100%;
  max-height: 50vh;
  border: 1px solid $gray2;
}
.series-title {
  color: $gray0;
  background-color: $gray3;
  padding: 0.2rem;
  border-radius: 5%;
  font-variant: small-caps;
  font-size: 0.8rem;
  font-weight: 100;
  float: right;
}
.post-header {
  padding-bottom: 20px;
}
.title {
  font-size: 2rem;
  font-weight: 600;
}

.date {
  font-size: 1rem;
  font-weight: 100;
  color: $gray2;
  float: right;
}
</style>
