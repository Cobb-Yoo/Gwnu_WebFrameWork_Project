import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "",
    url: "",
  },
  mutations: {
    setTitleInState(state, payload) {
      state.title = payload;
    },
    setUrlInState(state, payload) {
      state.url = payload;
    },
  },
  actions: {
    setTitle({ commit }, payload) {
      console.log(payload);
      commit("setTitleInState", payload);
      router.push("/enterUrl");
    },
    setUrl({ commit }, payload) {
      console.log(payload);
      commit("setUrlInState", payload);
      router.push("/choicePage");
    },
  },
});
