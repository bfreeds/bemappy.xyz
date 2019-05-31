<template>
  <header>
    <Logo class="logo" />
    <h1 class="title">
      Brandyn Friedly
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
// @import '~assets/style/variables.scss';

header {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
}

.title {
  border: 1px solid red;
  color: gray;
  font-variant: small-caps;
  font-size: 1.5rem;
  word-spacing: 0.3rem;
  letter-spacing: 0.3rem;
  font-weight: 200;
}

.logo {
  width: 40px;
}
</style>
