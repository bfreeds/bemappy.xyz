<template>
  <article class="post-wrapper">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </article>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
    return { post: data }
  }
}
</script>

<style lang="scss" scoped>
article {
  max-width: 600px;
  padding: 10px;
  background: beige;
  border: 1px solid olive;
}

h1 {
  font-size: 1.4rem;
  padding-bottom: 1rem;
}
p {
  font-size: 1.2rem;
}
</style>
