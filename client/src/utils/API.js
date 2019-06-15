import Axios from "axios"

export default {
  loginUser(email, password) {
    return Axios.post("/api/user/login", { email, password })
  }
}