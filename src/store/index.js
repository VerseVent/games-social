import Vue from "vue";
import AxiosAPI from "@/service/AxiosAPI";
import Vuex from "vuex";
const ax = new AxiosAPI();
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
  },
  getters: {},
  mutations: {
    SET_USER_DATA(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    async loginUser({ commit }, loginData) {
      try {
        const userData = await ax.sendLoginForm(loginData);
        commit("SET_USER_DATA", userData);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
