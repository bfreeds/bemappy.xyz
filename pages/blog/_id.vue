<template>
  <article class="post-wrapper">
    <header class="post-header">
      <h3 class="series-title">
        Teaching Data Literacy
      </h3>
      <h1 class="title">
        {{ post.title }}
      </h1>
      <h3 class="date">
        July 19th, 2019
      </h3>
    </header>
    <section class="post-wrap">
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.body }}</p>
    </section>
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
  max-width: 500px;
  padding: 10px;
}

.series-title {
  color: $gray0;
  background-color: $gray3;
  padding: 0.2rem;
  border-radius: 5%;
  font-variant: small-caps;
  font-size: 0.8rem;
  font-weight: 100;
  float: right;
}
.post-header {
  padding-bottom: 20px;
}
.title {
  font-size: 2rem;
  font-weight: 600;
}

.date {
  font-size: 1rem;
  font-weight: 100;
  color: $gray2;
  float: right;
}

p {
  font-size: 1.2rem;
  padding-bottom: 1.4rem;
}
</style>
