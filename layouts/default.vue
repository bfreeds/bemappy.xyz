// default layout
<template>
  <div class="wrapper">
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
.wrapper {
  min-height: 100vh;
  display: grid;
  grid-gap: 10px;
  grid-template-areas:
    'header'
    'nuxt'
    'footer';
}

.header {
  grid-area: header;
  height: 80px;
}

/* whichever vue page component is rendered */
.main {
  grid-area: nuxt;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  background-color: transparentize($gray0, 0.4);
  border: 1px solid $gray1;
  border-radius: 5px;
}

/* universal footer */
.footer {
  grid-area: footer;
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
