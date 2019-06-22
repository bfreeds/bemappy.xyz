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
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="description" class="description" v-html="descriptionHtml" />
    </section>

    <footer class="card-footer">
      <a v-if="projectUrl" :href="projectUrl" class="project-url" target="_blank" rel="noopener noreferrer"><font-awesome :icon="['fas', 'link']" /></a>
 
      <h5 class="tag">
        {{ type }}
      </h5>
      <a v-if="githubUrl" :href="githubUrl" class="github-url" target="_blank" rel="noopener noreferrer"><font-awesome :icon="['fab', 'github']" /></a>
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
    photo: { type: [String, Object] },
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
  width: 100%;
  background-color: transparentize($gray0, 0.7);
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  padding: 15px;
  border: 1px solid $gray2;
  border-radius: 10px;
}

.card:hover {
  box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07),
    1px 6px 12px rgba(39, 44, 49, 0.04);
  transition: all 0.4s ease;
  transform: translate3D(0, -1px, 0) scale(1.02);
}

.card-lead {
  width: 100%;
  background-color: $color1;
  text-align: center;
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
  font-weight: 400;
}

.photo {
  max-width: 100%;
  border: 1px solid $gray2;
  margin-bottom: 5px;
}

.icon {
  width: 1.3rem;
  float: right;
}
</style>
