import signup from "./user/signup";
import login from "./user/login";
import Notiflix from "notiflix";
import axiosInstance from "./AxiosTokenInstance";

export default class AxiosAPI {
  async sendSignupForm(data) {
    try {
      const res = await signup(data);
      return res;
    } catch (e) {
      Notiflix.Notify.warning(e.response.data.message);
    }
  }
  async sendLoginForm(data) {
    try {
      const resData = await login(data);

      localStorage.setItem("jwt", resData.data);

      return Notiflix.Notify.success("User logged");
    } catch (e) {
      return Notiflix.Notify.warning(e.response.data.message);
    }
  }
  async authUser() {
    try {
      const isApproved = await axiosInstance.get(
        "http://localhost:3000/user/auth"
      );
      console.log(isApproved);
      return isApproved.status;
    } catch (e) {
      // return Notiflix.Notify.failure(e.response.data.message);
    }
  }
}
