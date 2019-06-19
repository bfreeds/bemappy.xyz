// work page
<template>
  <section class="container">
    <header>
      <h1 class="page-title">
        work 🛠️
      </h1>
      <h3 class="page-subtitle">
        selected projects, talks, tutorials, etc.
      </h3>
    </header>

    <article v-if="projects">
      <ul class="content-list">
        <li v-for="(project, index) in projects" :key="index">
          <ProjectCard  
            :key="index"
            :name="project.fields.name"
            :type="project.fields.type" 
            :photo="project.fields.photo"
            :description="project.fields.description"
            :organization="project.fields.organization"
            :project-url="project.fields.projectUrl"
            :github-url="project.fields.githubUrl"
          />
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import ProjectCard from '~/components/ProjectCard'

export default {
  components: {
    ProjectCard
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  },
  // Computed works when the fetch method is on *this* page.  Is not working when the store is just hydrated from the getProjects action being dispatched on the home page.
  async fetch({ store, params }) {
    // eslint-disable-next-line no-console
    console.log('async fetch on portfolio page executed')
    await store.dispatch('getProjects')
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 95vw;
}

header {
  margin: 0 auto;
  text-align: center;
  padding-bottom: 1.5rem;
}

article {
  width: 100%;
}

.content-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  /* pattern learned from Rachel Andrews */
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  grid-gap: 2rem;
}
</style>
