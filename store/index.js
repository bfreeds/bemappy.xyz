// Vuex Store
import axios from 'axios'
import client from '~/plugins/contentful'

// default Vuex store

// function that returns object to avoid shared state
const state = () => ({
  posts: [],
  projects: [],
  ui: {
    // whether or not the hero image and header are aligned and fixed
    // used so user only scrolls once and the state is remembered across app
    isHeroScrolled: false
  }
})

const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setProjects(state, projects) {
    state.projects = projects
  },
  setHero(state, value) {
    state.ui.isHeroScrolled = value
  }
}

// actions dispatched from components
const actions = {
  // dispatched on home page
  async getProjects({ commit }) {
    // eslint-disable-next-line no-console
    console.log('getProjects EXECUTED')
    const response = await client.getEntries({
      content_type: 'project'
    })

    if (response.items.length > 0) {
      commit('setProjects', response.items)
    }
  },
  // dispatched on server initialization
  async nuxtServerInit({ commit }) {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    commit('setPosts', data)
  },
  fixHero({ commit }) {
    commit('setHero', true)
  }
}

export { state, mutations, actions }
