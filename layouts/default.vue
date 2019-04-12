// layout
<template>
  <div id="container">
    <Logo class="logo" />
    <Header class="header" />
    <Sidebar class="sidebar" />
    <nuxt class="content" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Header from '../components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Logo,
    Header,
    Sidebar,
    Footer
  }
}
</script>

<style scoped>
/* grid container for the whole page */
#container {
  display: grid;
  grid-template-columns: 200px 3fr 1fr;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
    'logo head head'
    'side main .'
    'foot foot foot';
  grid-gap: 1rem;
}

/* universal header */
.logo {
  grid-area: logo;
  border: 1px solid red;
  margin: 0 auto;
  width: 100px;
}
.header {
  grid-area: head;
  margin: 1rem;
  background: blue;
}

/* sidebar for medium-large viewports */
/* TODO: make responsive */
.sidebar {
  grid-area: side;
  border: 1px solid black;
}

/* whichever vue page component is rendered */
.content {
  grid-area: main;
  width: 100%;
}

/* universal footer */
.footer {
  grid-area: foot;
}
</style>
