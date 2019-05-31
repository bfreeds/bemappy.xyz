<template>
  <div class="nav">
    <nav>
      <ul>
        <li>
          <nuxt-link exact to="/portfolio">
            Portfolio
          </nuxt-link>
        </li>
        <li>
          <nuxt-link exact to="/blog">
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link exact to="/contact">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
ul li {
  list-style: none;
}
</style>
