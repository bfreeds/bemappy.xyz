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
  width: 100%;
  position: sticky;
  top: -80px;
  transition: filter 1s ease-out;
}

.blurred {
  filter: blur(2px);
}
</style>
