<template>
  <header>
    <logo class="logo" />
    <h1>Brandyn Friedly</h1>
  </header>
</template>

<script>
import Logo from '../components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
header {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
}

.logo {
  height: 100%;
  background: white;
  padding-right: 2rem;
}

h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border: 1px solid red;
  font-variant: small-caps;
  font-size: 3rem;
  word-spacing: 0.6rem;
  letter-spacing: 0.3rem;
  font-weight: 200;
}
</style>
