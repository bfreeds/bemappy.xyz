<template>
  <footer>
    <SocialMedia />
    <p>Made with Vue and NuxtJS</p>
  </footer>
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
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
