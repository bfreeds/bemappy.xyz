<template>
  <footer>
    <p>Made with Vue and NuxtJS</p>
    <div class="profile-buttons">
      <!-- twitter -->
      <a href="https://twitter.com/brandynfriedly">      <font-awesome :icon="['fab', 'twitter']" /></a>
      <!-- github -->
      <a href="https://github.com/bfreeds"><font-awesome :icon="['fab', 'github']" /></a>
      <!-- linkedin -->
      <a href="https://www.linkedin.com/in/brandyn-friedly-2b154b187/">    <font-awesome :icon="['fab', 'linkedin']" /></a>

      <!-- instagram -->
      <a href="https://www.instagram.com/brandyn.friedly/">      <font-awesome :icon="['fab', 'instagram']" /></a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  background-color: $color2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.profile-buttons {
  width: 50%;
  max-width: 200px;
  display: flex;
  justify-content: space-around;
}
</style>
