// Project Card Component
<template>
  <div class="card">
    <header class="card-lead">
      <h3 class="title">
        {{ name }}
      </h3>
      <h3 v-if="organization" class="organization">
        {{ organization.fields.name }}
      </h3>
      <p v-if="finishDate" class="date-finished">
        {{ finishDate }}
      </p>
    </header>

    <section class="card-body">
      <img v-if="photo" :src="photoUrl" alt="" class="photo">
      <!-- description logic -->
      <div v-if="description" class="description" v-html="descriptionHtml" />
    </section>

    <footer class="card-footer">
      <a v-if="projectUrl" :href="projectUrl" class="project-url" target="_blank" rel="noopener noreferrer"><img src="../assets/logos/icons/link.svg" alt="Link Icon" class="icon"></a>
 
      <h5 class="type">
        {{ type }}
      </h5>
      <a v-if="githubUrl" :href="githubUrl" class="github-url" target="_blank" rel="noopener noreferrer">  <img src="../assets/logos/github.svg" alt="Github Logo" class="icon"></a>
    </footer>
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
    organization: { type: [String, Object] },
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
    },
    photoUrl: function() {
      return `https:${this.photo.fields.file.url}`
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
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 15px;
  border: 1px solid $gray1;
  text-align: center;
}

.card-lead {
  width: 100%;
  background-color: $gray5;
}

.card-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.title,
.organization {
  color: $gray0;
}
.title {
  font-style: italic;
  font-size: 1rem;
  font-weight: 400;
  align-self: right;
}

.type {
  font-variant: small-caps;
  padding: 2px;
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: 100;
}

.photo {
  max-width: 100%;
  border: 1px solid $gray2;
  margin-bottom: 5px;
}

.description {
  text-align: left;
  font-size: 1rem;
}

.icon {
  width: 1.3rem;
  float: right;
}
</style>
