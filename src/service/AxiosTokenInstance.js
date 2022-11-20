import axios from "axios";
const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config) => {
  const jwt = localStorage.getItem("jwt");
  config.headers = {
    Authorization: `Bearer ${jwt}`,
  };

  return config;
});

export default axiosInstance;
