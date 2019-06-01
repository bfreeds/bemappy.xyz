<template>
  <div class="nav">
    <nav>
      <ul>
        <li>
          <nuxt-link exact to="/blog">
            Blog
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav {
  font-size: 1.4rem;
  padding-top: 10px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
ul li {
  list-style: none;
}
</style>
