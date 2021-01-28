import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allLetters: "ENITRLSAOHUDYCGMPBKVWFZXQJ", // 所有按键
    currentLetter: "", // 当前按下按键
    practiceLetters: "ENITRL", // 预设练习按键组
    minRange: 4, // 预设按键组最小长度
    keyLetter: "E", // 预设重点练习按键
    showFingers: true, // 是否显示指位
    keyboardColor: "#87CEEB" // 键盘颜色
  },
  mutations: {
    onkeydown(state, val) {
      state.currentLetter = val;
    },
    onkeyup(state) {
      state.currentLetter = null;
    },
    settingPracticeLetters(state, val) {
      state.practiceLetters = state.allLetters.slice(0, val);
    },
    setKeyLetter(state, val) {
      state.keyLetter = val;
    },
    changeFingersShow(state, val) {
      state.showFingers = val;
    },
    changeKeyboardColor(state, val) {
      state.keyboardColor = val;
    }
  },
  actions: {},
  modules: {}
});
