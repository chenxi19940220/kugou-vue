import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    isLoading: false,
    kuGouSize: 400
  },
  mutations: {
    updatedIsLoading (state, loading) {
      state.loading = loading.isLoading
    }
  }
})

export default store
