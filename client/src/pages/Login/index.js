import React, { Component } from 'react';
import "./login.css"

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    singup: false,
    running: false
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSwitchForm = () => {
    this.setState({ signup: !this.state.signup })
  }

  changeUsernameInput = () => {
    const usernameInput = document.getElementById("usernameInput");
    const sectionHeight = usernameInput.scrollHeight;
    console.log(sectionHeight)

  }

  changeUsernameInput = () => {
    this.setState({ running: true })
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");
    const login = document.getElementById("login");
    const signSwitchBtn = document.getElementById("signSwitchBtn");
    if (this.state.signup) {
      usernameInput.classList = "inputGroup userInputOut"
      setTimeout(() => {
        let pos = 80;
        const timer = setInterval(() => {
          if (pos <= 0) {
            clearInterval(timer);
            usernameInput.style.display = "none";
            usernameInput.classList = "inputGroup userInputIn";
            this.setState({ signup: false, running: false })
          } else {
            pos--;
            passwordInput.style.top = pos + "px";
            signSwitchBtn.style.top = pos + 10 + "px";
            login.style.height = pos + 231 + "px";
          }
        }, 5)
      }, 50)
    } else {
      console.log("this is the switch from false to true");
      let pos = 0;
      const timer = setInterval(() => {
        if (pos >= 80) {
          clearInterval(timer);
          passwordInput.style.top = "80px";
          this.setState({ signup: true, running: false });

        } else {
          pos++;
          passwordInput.style.top = pos + "px";
          signSwitchBtn.style.top = pos + +10 + "px";
          login.style.height = pos + 231 + "px";
          if (pos === 50) {
            usernameInput.style.display = "block"
          }
        }
      }, 5)
    }

  }

  render() {
    return (
      <div className={this.state.signup ? "outsideLogin green" : "outsideLogin blue"}>
        <h1>{this.state.signup ? "Sign Up" : "Login"}</h1>

        <div className="login" id="login">
          <div className="signBox">
            <div className="inputGroup">
              <label>Email</label>
              <input type="text" name="email" value={this.state.email} onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="inputGroup userInputIn" id="usernameInput">
              <label>Username</label>
              <input type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="inputGroup" id="passwordInput">
              <label>Password</label>
              <input type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
            </div>
          </div>

          <button className="signSwitchBtn" id="signSwitchBtn" onClick={this.state.running ? null : this.changeUsernameInput}>{this.state.signup ? "Already a member?" : "Not signed up?"}</button>
        </div>
      </div>
    );
  }
}

export default Login;
