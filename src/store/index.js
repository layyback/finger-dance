import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLetter: "", // 当前按下按键
    practiceLetters: "ENITRL", // 预设练习按键组
    keyLetter: "E" // 预设重点练习按键
  },
  mutations: {
    onkeydown(state, val) {
      state.currentLetter = val;
    },
    onkeyup(state) {
      state.currentLetter = null;
    }
  },
  actions: {},
  modules: {}
});
