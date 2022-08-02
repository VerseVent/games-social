import axios from "axios";

export default async function login(loginData) {
  return await axios.post("http://localhost:3000/user/login", loginData);
}
