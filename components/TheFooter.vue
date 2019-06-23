<template>
  <footer>
    <div class="profile-buttons">
      <!-- twitter -->
      <a href="https://twitter.com/brandynfriedly"><font-awesome :icon="['fab', 'twitter']" class="fa-icon" /></a>
      <!-- github -->
      <a href="https://github.com/bfreeds"><font-awesome :icon="['fab', 'github']" class="fa-icon" /></a>
      <!-- linkedin -->
      <a href="https://www.linkedin.com/in/brandyn-friedly-2b154b187/">    <font-awesome :icon="['fab', 'linkedin']" class="fa-icon" /></a>
      <!-- instagram -->
      <a href="https://www.instagram.com/brandyn.friedly/">      <font-awesome :icon="['fab', 'instagram']" class="fa-icon" /></a>
    </div>

    <p>Made with Vue and NuxtJS</p>
    <div class="license">
      <p>
        Copyright (c) 2019 Brandyn Friedly 
        <a href="https://github.com/bfreeds/bemappy.xyz">
          <font-awesome :icon="['fab', 'github']" class="fa-icon" />
        </a>  MIT License
      </p>
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
  justify-content: space-between;
}

.profile-buttons {
  margin-top: 1rem;
  width: 50%;
  max-width: 200px;
  display: flex;
  justify-content: space-around;
}

.license p {
  font-size: 0.7rem;
  font-variant: small-caps;
}
</style>
