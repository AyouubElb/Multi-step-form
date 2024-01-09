import { createStore } from "vuex";

export default createStore({
  state: {
    stepNum: 1,
  },
  getters: {
    getStepNum(state) {
      return state.stepNum;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
