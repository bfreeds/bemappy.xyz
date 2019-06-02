// portfolio page
<template>
  <section class="container">
    <h1 class="title">
      Portfolio
    </h1>
    <article v-if="projects">
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="index"
        :name="project.fields.name"
        :type="project.fields.type"
        :description="project.fields.description"
        :organization="project.fields.organization"
        :project-url="project.fields.projectUrl"
        :github-url="project.fields.githubUrl"
      />
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

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
