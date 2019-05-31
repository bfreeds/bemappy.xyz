<template>
  <div class="nav">
    <nav>
      <ul>
        <li>
          <nuxt-link exact to="/portfolio">
            Portfolio
          </nuxt-link>
        </li>
        <li>
          <nuxt-link exact to="/blog">
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link exact to="/contact">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <SocialMedia class="social-media" />
  </div>
</template>

<script>
import SocialMedia from '~/components/SocialMedia.vue'

export default {
  components: {
    SocialMedia
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
ul li {
  list-style: none;
}
</style>
