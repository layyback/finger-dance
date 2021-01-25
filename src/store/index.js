import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentKey: ""
  },
  mutations: {
    onkeydown(state, val) {
      state.currentKey = val;
    },
    onkeyup(state) {
      state.currentKey = null;
    }
  },
  actions: {},
  modules: {}
});
