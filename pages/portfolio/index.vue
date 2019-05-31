// page
<template>
  <section class="container">
    <div>
      <h1>
        Portfolio
      </h1> 
      <logo />
    </div>
    <nuxt-child />
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
