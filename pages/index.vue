// home page
<template lang="md">

<div class="container">
<Avatar class='photo' />


# Welcome Message
# Who Am I
I'm Brandyn, a geographer who does web development and design with a ❤️ for maps and community. 

# What Do I Do

# Get In Touch

# This Page Should:  
1.  Hook someone into learning more
1.  Call to action to say hi
1.  Draw people to read the blog
1.  Draw people to look at the portfolio  

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
