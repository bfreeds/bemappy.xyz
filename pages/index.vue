// page
<template>
  <section class="container">
    <div>
      <h1 class="title">
        Brandyn Friedly
      </h1>
      <h2 class="subtitle">
        My personal website, blog, and portfolio.
      </h2>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  // fetch method
  fetch({ store, params }) {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      // add posts to global store
      store.commit('setPosts', res.data)
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Crimson+Text');

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Crimson Text', serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-family: 'Crimson Text', serif;
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  font-family: 'Crimson Text', serif;
  padding-top: 15px;
}
</style>
