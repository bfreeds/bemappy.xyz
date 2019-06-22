<template>
  <div class="header-wrapper">
    <header :class="{fixed: isHeroScrolled}">
      <Logo class="logo" />
      <TheNav class="nav" />
    </header>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import TheNav from '~/components/TheNav.vue'

export default {
  components: {
    Logo,
    TheNav
  },
  computed: {
    // global state to control hero between pages, only scroll once.
    isHeroScrolled() {
      return this.$store.state.ui.isHeroScrolled
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  position: sticky;
  top: 0;
  background-image: url('~assets/photos/hero.jpg');
  background-size: cover; //TODO: fix this so hero scrolls to sticky behind header
  box-shadow: transparentize($color4, 0.3) 0 0 5px 1.5px;
}

header {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: transparentize($gray0, 0.3);
  transition: background-color 2s ease-in;
}

.nav {
  flex-grow: 2;
}

// add a background for when the hero photo is fixed to the header
.fixed {
  background-color: transparentize($gray1, 0.6);
}

.logo {
  flex-grow: 1;
  height: 80px;
  align-self: flex-start;
}

@media (min-width: 500px) {
  h1 {
    font-size: 1.8rem;
  }
}
</style>
