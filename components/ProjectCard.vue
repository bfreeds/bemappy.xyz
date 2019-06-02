// Project Card Component
<template>
  <div class="card">
    <!-- project header -->
    <h5 class="type">
      {{ type }}
    </h5>
    <h3 class="title">
      {{ name }}
    </h3>
    <h3 v-if="organization" class="organization">
      {{ organization }}
    </h3>
    <p v-if="finishDate" class="date-finished">
      {{ finishDate }}
    </p>
    <!-- project details -->
    <img v-if="photo" src="" alt="" class="photo">
    <!-- description logic -->
    <div v-if="description" class="description">
      <div v-html="descriptionHtml" />
    </div>
    <div v-else>
      Description Would Go Here!
    </div>
    <!-- project urls -->
    <a v-if="projectUrl" :href="projectUrl" class="project-link">Project URL</a>
    <a v-if="githubUrl" :href="githubUrl" class="github-link">  <img src="../assets/logos/github.svg" alt="Github Logo" class="github-logo"></a>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  props: {
    name: { type: String, required: true, default: 'Name' },
    type: { type: String, required: true, default: 'Type' },
    // eslint-disable-next-line vue/require-default-prop
    description: { type: [String, Object] },
    // eslint-disable-next-line vue/require-default-prop
    organization: { type: String },
    // eslint-disable-next-line vue/require-default-prop
    projectUrl: { type: String },
    // eslint-disable-next-line vue/require-default-prop
    githubUrl: { type: String },
    // eslint-disable-next-line vue/require-default-prop
    photo: { type: String },
    // eslint-disable-next-line vue/require-default-prop
    startDate: { type: String },
    // eslint-disable-next-line vue/require-default-prop
    finishDate: { type: String }
  },
  computed: {
    descriptionHtml: function() {
      return this.toHtml(this.description)
    }
  },
  methods: {
    toHtml: function(text) {
      return documentToHtmlString(text)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin: 1rem;
  background: $gray2;
  border: 1px solid $gray6;
}

.github-logo {
  width: 2rem;
}
.description {
  font-size: 1.2rem;
  color: black;
  border: 1px solid black;
}
</style>
