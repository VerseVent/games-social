import { axiosAPI } from "@/service/AxiosAPI";

export default {
  state: {
    userData: {},
    currentUserData: {},
  },
  getters: {
    GET_USER_ID(state) {
      if (state.userData) {
        return state.userData.id;
      }
    },
    GET_CURRENT_USER(state) {
      if (state.currentUserData) {
        return state.currentUserData;
      }
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.userData = userData;
    },
    SET_CURRENT_USER_DATA(state, userData) {
      state.currentUserData = userData;
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
    async getUserById({ commit }, userId) {
      try {
        const userData = await axiosAPI.getUserById(userId);
        console.log(userData);
        commit("SET_CURRENT_USER_DATA", userData);
      } catch (e) {
        throw e;
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
