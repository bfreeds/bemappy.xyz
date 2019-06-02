// home page
<template lang="md">

<div class="container">
<Avatar class='photo' />


# Welcome!
I'm Brandyn, a geographer who does full stack web development and design with a ❤️ for community and mapping.  

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
.container {
  margin: 0 auto;
  padding: 0 30px;
  // display: flex;
  // flex-direction: column;
  // align-items: flex-start;
}

h1 {
  font-size: 2rem;
  line-height: 2.6rem;
  color: $gray6;
  font-weight: 200;
}

.photo {
  shape-outside: circle(50%);
  float: right;
}
</style>
