export default async function signup(formData) {
  const data = await fetch("http://localhost:3000/user/signup", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify(formData),
  });
}
