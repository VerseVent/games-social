import { axiosAPI } from "@/service/AxiosAPI";

export default {
  state: {
    userData: {},
  },
  getters: {
    GET_USER_ID(state) {
      return state.userData._id;
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.userData = userData;
    },
    DELETE_USER_DATA(state) {
      state.userData = null;
    },
  },
  actions: {
    async loginUser({ commit }, loginData) {
      try {
        const userData = await axiosAPI.sendLoginForm(loginData);
        commit("SET_USER_DATA", userData);
      } catch (error) {
        throw error;
      }
    },
    async authUser({ commit }) {
      try {
        const user = await axiosAPI.authUser();
        commit("SET_USER_DATA", user.data);
      } catch (e) {
        localStorage.removeItem("jwt");
        commit("DELETE_USER_DATA");
        throw e;
      }
    },
  },
};
