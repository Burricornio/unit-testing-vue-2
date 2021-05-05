import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paco: 'poaco',
  },
  mutations: {},
  actions: {
    actionClick() {
      console.log('Click a topeeeeeee')
    },
  },
  modules: {},
})
