<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/work">
          Work
        </nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/blog">
          Blog
        </nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/about">
          Me
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
ul li {
  list-style: none;
}

a {
  padding: 2px;
}
</style>
