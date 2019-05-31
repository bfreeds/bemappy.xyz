<template>
  <footer>
    <SocialMedia />
    <p>Copyright Brandyn Friedly 2019</p>
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
