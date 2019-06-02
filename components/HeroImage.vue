<template>
  <div class="hero">
    <div class="top">
      <img src="~assets/photos/hero.jpg" alt="hero">
    </div>
    <div class="bottom">
      <img src="~assets/photos/hero.jpg" alt="hero">
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  position: relative;
  max-width: 100%;
  border: 1px solid $gray1;
  // TODO: BLUR ANIMATE ON HEADER ALIGNMENT
  // filter: blur(1px);
}
.top,
.bottom {
  overflow: hidden;
}

.top {
  margin-bottom: -100px;
}

.bottom {
  height: 100px;
  position: sticky;
  top: 0;
}

.bottom img {
  position: absolute;
  bottom: 0;
}
</style>
