<template>
  <header>  
    <h1 class="title">
      Brandyn Friedly
    </h1>
    <Logo class="logo" />
    <h1 class="sitename">
      BeMappy.xyz
    </h1>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 100px;
  position: sticky;
  top: 0;
  padding-bottom: 20px;
  z-index: 10;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  background-color: transparentize($jade, 0.6);
}

h1 {
  color: $gray0;
  font-size: 2.2rem;
  word-spacing: 0.7rem;
  letter-spacing: 0.2rem;
  font-weight: 800;
  font-variant: small-caps;

  align-self: center;
}

.logo {
  width: 80px;
  float: left;
}
</style>
