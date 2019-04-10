<template>
  <section class="sidebar">
    <nav>
      <ul>
        <li>
          <nuxt-link exact to="/portfolio">
            Portfolio
          </nuxt-link>
        </li>
        <ul>
          <li>
            <nuxt-link to="/portfolio/speaking-teaching">
              Speaking & Teaching
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/portfolio/design">
              Design
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/portfolio/writing">
              Writing
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/portfolio/photography">
              Photography
            </nuxt-link>
          </li>
        </ul>
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
  </section>
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
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
ul li {
  list-style: none;
}

.social-media {
}
</style>
