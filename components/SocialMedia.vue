<template>
  <div class="container">
    <div class="logo-link">
      <a href="https://github.com/bfreeds">
        <img src="../assets/logos/github.svg" alt="Github Logo" class="logo">
      </a>
    </div>
    <div class="logo-link">
      <a href="https://twitter.com/brandynfriedly">
        <img src="../assets/logos/twitter.svg" alt="Twitter Logo" class="logo">
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
}

.logo-link {
  align-self: flex-start;
  padding-right: 3rem;
}

.logo {
  width: 3rem;
  height: 3rem;
}
</style>
