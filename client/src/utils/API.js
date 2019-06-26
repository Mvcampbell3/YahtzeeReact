import Axios from "axios"

export default {
  loginUser(email, password) {
    return Axios.post("/api/user/login", { email, password })
  },

  signupUser(email, username, password) {
    return Axios.post("/api/user/signup", { email, username, password })
  },

  checkToken() {
    return Axios.get("/api/user/checktoken", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
  }
}