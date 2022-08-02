import axios from "axios";

export default async function signup(formData) {
  await axios.post("http://localhost:3000/user/signup", formData);
}
