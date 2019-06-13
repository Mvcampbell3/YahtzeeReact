import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    singup: false
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSwitchForm = () => {
    this.setState({ signup: !this.state.signup })
  }

  render() {
    return (
      <div>
        {this.state.signup ?
          <div>
            <div className="inputGroup">
              <label>Email</label>
              <input type="text" name="email" value={this.state.email} onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="inputGroup">
              <label>Username</label>
              <input type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="inputGroup">
              <label>Password</label>
              <input type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
            </div>
          </div>
          :
          <div>
            <div className="inputGroup">
              <label>Email</label>
              <input type="text" name="email" value={this.state.email} onChange={e => this.handleInputChange(e)} />
            </div>
            <div className="inputGroup">
              <label>Password</label>
              <input type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
            </div>
          </div>
        }
        <button onClick={this.handleSwitchForm}>{this.state.signup ? "To Login" : "To Signup"}</button>
      </div>
    );
  }
}

export default Login;
