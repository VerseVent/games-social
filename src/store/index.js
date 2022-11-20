import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
// const ax = new AxiosAPI();
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
});
