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
      state.info = payload;
    },
  },
  actions: {
    setData({ commit }, payload) {
      commit("setDataInState", payload);

      if (payload.to == "img") router.push("/" + "img");
      else if (payload.to == "text") router.push("/" + "text");
    },
  },
  getters: {
    getUrl: (state) => {
      return state.info.url;
    },
  },
});
