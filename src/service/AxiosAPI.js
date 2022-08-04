import Notiflix from "notiflix";
import axiosInstance from "./AxiosTokenInstance";

export default class AxiosAPI {
  async sendSignupForm(data) {
    try {
      const res = await axiosInstance.post(
        "http://localhost:3000/user/signup",
        data
      );
      debugger;
      return res;
    } catch (e) {
      Notiflix.Notify.warning(e.response.data.message);
    }
  }
  async sendLoginForm(data) {
    try {
      const resData = await axiosInstance.post(
        "http://localhost:3000/user/login",
        data
      );
      localStorage.setItem("jwt", resData.data.token);
      Notiflix.Notify.success("User logged");

      return resData.data.user;
    } catch (e) {
      return Notiflix.Notify.warning(e.response.data.message);
    }
  }
  async authUser() {
    try {
      const isApproved = await axiosInstance.get(
        "http://localhost:3000/user/auth"
      );
      return isApproved.status;
    } catch (authError) {
      Notiflix.Notify.failure("Wrong token");
      throw authError;
    }
  }
  async getGamesInfo() {
    try {
      const res = await axiosInstance.get(
        "http://localhost:3000/game/getGamesInfo"
      );
      return res.data;
    } catch (authError) {
      Notiflix.Notify.failure("Unauthorized");
      console.log(authError);
      // throw authError;
    }
  }
  async getGameById(gameId) {
    try {
      const res = await axiosInstance.get(
        `http://localhost:3000/game/getGameById/${gameId}`
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
}
