// home page
<template>
  <section class="container">
    <div>
      <h2 class="summary">
        My personal website, blog, and portfolio.
      </h2>
      <section class="personal-statement">
        <p>this is where i would put a statement about what i do and what i'm about</p>
      </section>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.summary {
  font-weight: 300;
  font-size: 4rem;
  color: $gray5;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
