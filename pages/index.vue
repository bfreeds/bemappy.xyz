// home page
<template lang="md">

<img class="hero" src="~/assets/photos/hero.jpg" />

<div class="container">
<Avatar class='photo' />


# Welcome!
I'm Brandyn Friedly, a geographer who does full stack web development and design with a ❤️ for community and mapping.  

I also teach, <a target="_blank" rel="noopener noreferrer" href="https://bfreeds.github.io/foss4gna-2018-devops/">speak</a>, and write (portfolio forthcoming on this site-in-progress).

# Get in Touch 👋
I'm currently seeking my next opportunity to work with a team.  

I'm especially interested in projects in journalism, digital humanities, civic technology, or a similar field that creatively applies software for the common good.

If you'd like to discuss working together, or just say "hi", I would love to hear from you.  You can reach me [here](mailto:bfriedly@bemappy.xyz).

</div>
</template>

<script>
import Avatar from '../components/Avatar'

export default {
  components: {
    Avatar
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 0;
  width: 100vw;
}
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 10;
  max-width: 600px;
  background-color: transparentize($gray0, 0.2);
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid $gray2;
  box-shadow: 1px 1px 1px 1px $color2;
}

.photo {
  padding: 5px;
  margin: 5px auto;
}
</style>
