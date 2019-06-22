// default layout
<template>
  <div class="page-wrapper">
    <TheHeader class="header" />
    <nuxt class="main" />
    <TheFooter class="footer" />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang='scss' scoped>
/* grid container for the whole page */
.page-wrapper {
  min-height: 100vh;
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'header'
    'nuxt'
    'footer';
}

.header {
  grid-area: header;
  z-index: 100;
  height: 80px;
}

/* whichever vue page component is rendered */
.main {
  grid-area: nuxt;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
}

/* universal footer */
.footer {
  grid-area: footer;
  height: 30vh;
  min-height: 200px;
}

/* for viewports large enough for two columns */
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      'header  header'
      'nuxt   nuxt'
      'nuxt   nuxt'
      'footer  footer';
  }
}
</style>
