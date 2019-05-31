// layout
<template>
  <div class="wrapper">
    <Header class="header" />
    <Nav class="nav" />
    <article>
      <nuxt class="content" />
    </article>
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '~/components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
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
    'nuxt'
    'nav'
    'footer';
}

.header {
  grid-area: header;
  background: blue;
}

.nav {
  grid-area: nav;
  border: 1px solid black;
}

/* whichever vue page component is rendered */
article {
  grid-area: nuxt;
  width: 100%;
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
      'nav     nuxt'
      'sidebar nuxt'
      'footer  footer';
  }
}
</style>
