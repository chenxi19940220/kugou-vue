import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    isLoading: true,
    kuGouSize: 400
  },
  mutations: {
    updatedIsLoading (state, loading) {
      state.loading = loading
    }
  }
})

export default store
