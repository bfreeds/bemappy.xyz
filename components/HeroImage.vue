<template>
  <img :class="{blurred: isHeroScrolled}" src="~assets/photos/hero.jpg" alt="hero">
</template>


<script>
export default {
  computed: {
    isHeroScrolled() {
      return this.$store.state.ui.isHeroScrolled
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  position: relative;
  max-width: 100%;
  border: 1px solid $gray1;
  transition: filter 1s ease-out;
}

.blurred {
  // TODO: BLUR ANIMATE ON HEADER ALIGNMENT
  filter: blur(2px);
}
</style>
