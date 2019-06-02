<template>
  <header>  
    <h1 class="sitename">
      beMappy.xyz
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
  }
}
</script>

<style lang="scss" scoped>
header {
  min-height: 80px;
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
  // gradient background to balance hero image when aligned
  // TODO: Animate the gradient & image blur on alignment
  background-image: linear-gradient(
    to right,
    transparentize($gray4, 0.5),
    transparentize($gray0, 0.5)
  );
}

h1 {
  color: $gray7;
  font-size: 1.2rem;
  word-spacing: 0.7rem;
  letter-spacing: 0.2rem;
  font-weight: 800;
  // font-variant: small-caps;

  align-self: center;
}

.logo {
  width: 80px;
  float: left;
}
</style>
