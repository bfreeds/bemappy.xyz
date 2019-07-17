<template>
  <a class="twitter-timeline" :href="socialUrl">National Park Tweets - Curated tweets by TwitterDev</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"/> 
</template>

<script>
export default {
  props: {
    brand: String,
    figure: String,
    text: String,
    socialUrl: String
  }
}
</script>

<style lang="scss" scoped>
</style>
