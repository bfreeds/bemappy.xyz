// default layout
<template>
  <div class="wrapper">
    <Header class="header" />
    <HeroImage class="hero" />
    <Nav class="nav" />
    <article>
      <nuxt class="content" />
    </article>
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import HeroImage from '../components/HeroImage.vue'
import Nav from '~/components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    HeroImage,
    Nav,
    Footer
  }
}
</script>

<style scoped>
/* grid container for the whole page */
.wrapper {
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'header'
    'hero'
    'nuxt'
    'nav'
    'footer';
}

.header {
  grid-area: header;
  position: sticky;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
  top: 0;
}
.hero {
  grid-area: hero;
  position: sticky;
  top: -1;
}
.nav {
  grid-area: nav;
}

/* whichever vue page component is rendered */
article {
  grid-area: nuxt;
  width: 100%;
  margin: 0 auto;
}

/* universal footer */
.footer {
  grid-area: footer;
  width: 100%;
}

/* for viewports large enough for two columns */
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      'header  header'
      'hero    hero'
      'nav     nuxt'
      'nav nuxt'
      'footer  footer';
  }
}
</style>
