import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:3000/user",
  headers: {
    "Content-Type": "application/json",
  },
});
