import axios from 'axios'

// default Vuex store

// function that returns object to avoid shared state
const state = () => ({
  posts: []
})

const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  }
}

const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    commit('setPosts', data)
  }
}

export { state, mutations, actions }
