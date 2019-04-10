<template>
  <section class="container">
    <div class="hero-container">
      <h1>Photography</h1>
      <img id="hero" src="~/assets/photos/profile_shadow.jpg" alt="" class="photo">
    </div>
    
    <img src="~/assets/photos/ne_bridge.jpg" alt="" class="photo">
    <img src="~/assets/photos/sewer_reflection.jpg" alt="" class="photo">
    <img src="~/assets/photos/stonearch.jpg" alt="" class="photo">
  </section>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row: auto;
  grid-template-areas:
    'hero hero hero'
    '. . .';
  grid-gap: 2rem;
}

.hero-container {
  grid-area: hero;
  position: relative;
}

h1 {
  position: absolute;
  top: 0;
  right: 1rem;
  font-variant: small-caps;
  font-size: 2rem;
  z-index: 1;
}

#hero {
  max-width: 100%;
  max-height: 100%;
  filter: invert(100%); /*cool for now but remove for prod */
}
.photo {
  max-width: 100%;
}
</style>
