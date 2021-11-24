import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: null,
  },
  mutations: {
    setDataInState(state, payload) {
      state.title = payload;
    },
  },
  actions: {
    setData({ commit }, payload) {
      commit("setDataInState", payload);
      router.push("/" + "img");
    },
  },
});
