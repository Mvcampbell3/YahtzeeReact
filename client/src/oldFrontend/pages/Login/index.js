import React, { Component } from 'react';
import "./login.css";
import API from "../../../utils/API";
import { Redirect } from "react-router-dom";
import Header from '../../components/Header';

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    singup: false,
    running: false,
    redirect: false
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSwitchForm = () => {
    this.setState({ signup: !this.state.signup })
  }

  loginUser = e => {
    e.preventDefault();
    if (this.state.email.trim() !== "" && this.state.password.trim() !== "") {
      API.loginUser(this.state.email, this.state.password)
        .then(result => {
          // console.log(result.data);
          const token = result.data.token;
          // console.log(token);
          localStorage.setItem("token", token);
          // console.log(result.status);
          if (result.status === 200) {
            // console.log("Yay great success");
            this.props.changeUserStatus(true, result.data.username);
            this.setState({ redirect: true })
          }
        })
        .catch(err => {
          // console.log("You did not succeed this time")
          alert("Login Unsuccessful");
        })
    } else {
      console.log("please add email and password")
    }
  }

  signupUser = e => {
    e.preventDefault();
    if (this.state.email.trim() !== "" && this.state.password.trim() !== "" && this.state.username.trim() !== "") {
      API.signupUser(this.state.email, this.state.username, this.state.password)
        .then(result => {
          // console.log(result);
          if (result.data.err) {
            // console.log(result.data.err);
            if (result.data.err.code === 11000) {
              return alert("Must be a unique username and email")
            }
            alert(result.data.err.message)
          } else {
            this.changeUsernameInput();
          }
        })
        .catch(err => {
          // console.log(err);
        })
    } else {
      // console.log("please add email, username, and password")
    }
  }

  changeUsernameInput = () => {
    this.setState({ running: true })
    if (this.state.signup) {
      this.setState({ signup: false, running: false });
    } else {
      this.setState({ signup: true, running: false })
    }

  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <>
        <Header color={'seagreen'} />
        <div className={this.state.signup ? "outsideLogin" : "outsideLogin"}>
          {this.renderRedirect()}
          <h1>{this.state.signup ? "Sign Up" : "Login"}</h1>

          <div className="login" id="login">
            <div className="signBox">
              <div className="inputGroup">
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={e => this.handleInputChange(e)} />
              </div>
              {this.state.signup ? <div className="inputGroup userInputIn" id="usernameInput">
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
              </div> : null}

              <div className="inputGroup" id="passwordInput">
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
              </div>
            </div>
            <div className="loginButtonHolder" id="loginButtonHolder">
              <button className="loginBtn" onClick={this.state.signup ? (e) => this.signupUser(e) : (e) => this.loginUser(e)}>
                {this.state.signup ? "Sign Up" : "Login"}
              </button>
              <button className="switchBtn" id="switchBtn" onClick={this.state.running ? null : this.changeUsernameInput}>{this.state.signup ? "Already a member?" : "Not signed up?"}</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
