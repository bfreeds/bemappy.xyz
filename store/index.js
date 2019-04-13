// default Vuex store
// mounted to root by Nuxt

// function that returns object to avoid shared state
const state = () => ({
  posts: []
})

const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  }
}

const actions = {}

export { state, mutations, actions }
