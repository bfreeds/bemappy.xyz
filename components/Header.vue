<template>
  <header :class="{fixed: isHeroScrolled}">  
    <h1 class="sitename">
      bemappy.xyz
    </h1>  
    <Logo class="logo" />
    <h1 class="title">
      brandyn friedly
    </h1>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    isHeroScrolled() {
      return this.$store.state.ui.isHeroScrolled
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 80px;
  position: sticky;
  top: 0;
  padding: 15px 0 15px 20px;
  z-index: 10;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  background-color: transparentize($gray0, 0.6);
  transition: background-color 2s ease-in;
}

.fixed {
  background-color: transparentize($gray1, 0.6);
}

h1 {
  color: $gray7;
  font-size: 1.3rem;
  word-spacing: 0.7rem;
  letter-spacing: 0.2rem;
  font-weight: 800;
  font-variant: small-caps;

  align-self: center;
}

.logo {
  height: 80px;
  align-self: flex-start;
}

@media (min-width: 500px) {
  h1 {
    font-size: 1.8rem;
  }
}
</style>
