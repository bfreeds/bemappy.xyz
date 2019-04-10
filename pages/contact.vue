// page
<template>
  <section class="container">
    <h1>Get in Touch!</h1>

    <ContactForm />
  </section>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>
