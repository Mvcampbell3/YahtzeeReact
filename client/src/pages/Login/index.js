import React, { Component } from 'react';
import "./login.css";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
      username: "",
      email: "",
      password: "",
      singup: false,
      running: false,
      redirect:false,
    }

    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleSwitchForm = () => {
      this.setState({ signup: !this.state.signup })
    }

    loginUser = e => {
      e.preventDefault();

      API.loginUser(this.state.email, this.state.password)
        .then(result => {
          console.log(result.data);
          const token = result.data.token;
          console.log(token);
          localStorage.setItem("token", token);
          console.log(result.status);
          if (result.status === 200) {
            console.log("Yeah great success");
            this.props.changeUserStatus(true, result.data.username);
            this.setState({redirect:true})
          }
        })
        .catch(err => {
          console.log(err);
        })
    }

    changeUsernameInput = () => {
      this.setState({ running: true })
      const usernameInput = document.getElementById("usernameInput");
      const passwordInput = document.getElementById("passwordInput");
      const login = document.getElementById("login");
      const loginButtonHolder = document.getElementById("loginButtonHolder");
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
              loginButtonHolder.style.top = pos + 10 + "px";
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
            loginButtonHolder.style.top = pos + +10 + "px";
            login.style.height = pos + 231 + "px";
            if (pos === 50) {
              usernameInput.style.display = "block"
            }
          }
        }, 5)
      }

    }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/' />
      }
    }

    render() {
      return (
        <div className={this.state.signup ? "outsideLogin green" : "outsideLogin blue"}>
          {this.renderRedirect()}
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
            <div className="loginButtonHolder" id="loginButtonHolder">
              <button className="loginBtn" onClick={this.state.signup ? null : (e) => this.loginUser(e)}>
                {this.state.signup ? "Sign Up" : "Login"}
              </button>
              <button className="switchBtn" id="switchBtn" onClick={this.state.running ? null : this.changeUsernameInput}>{this.state.signup ? "Already a member?" : "Not signed up?"}</button>
            </div>

          </div>
        </div>
      );
    }
  }

export default Login;
