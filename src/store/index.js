import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isCollapse: false
  },
  mutations: {
    toggleCollapse (state, value) {
      state.isCollapse = value
    }
  },
  getters: {},
  actions: {}
})
export default store