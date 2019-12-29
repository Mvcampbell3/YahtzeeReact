import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Game from "./pages/Game"
import Scores from "./pages/Scores"
import Lost from "./pages/Lost"
import Login from "./pages/Login"
import UserPage from "./pages/UserPage"

import API from "./utils/API";


class App extends Component {
  state = {
    user: false,
    username: null,
    userID: null,
    loadedUser: false
  }

  componentDidMount() {
    this.checkUserLoad();
  }

  checkUserLoad = () => {
    const token = localStorage.getItem('token');
    if (token) {
      API.checkToken()
        .then(result => {
          if (result.data.user) {
            this.setState(
              { user: result.data.user, username: result.data.username, userID: result.data.userID, loadedUser: true }
            )
          } else {
            localStorage.removeItem("token")
          }
        })
        .catch(err => {
          console.log(err)
          this.setState({ loadedUser: true })
        })
    } else {
      console.log("did not have token")
      this.setState({ loadedUser: true })
    }
  }

  changeUserStatus = (user, username) => {
    this.setState({ user: user, username: username });
  }

  logoutUser = () => {
    localStorage.removeItem("token");
    this.setState({ user: false, username: null })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={props =>
            <HomePage
              {...props}
              logoutUser={this.logoutUser}
              user={this.state.user}
              username={this.state.username}
              loadedUser={this.state.loadedUser}
            />}
          />
          <Route path="/userpage" exact render={props =>
            <UserPage user={this.state.user} username={this.state.username} userID={this.state.userID} />}
          />
          }
          <Route path="/login" exact render={props =>
            <Login {...props}
              user={this.state.user}
              username={this.state.username}
              changeUserStatus={this.changeUserStatus}
            />}
          />
          <Route path="/game" exact render={props => <Game {...props} user={this.state.user} username={this.state.username} />} />
          <Route path="/scores" exact render={props => <Scores {...props} user={this.state.user} username={this.state.username} scores={this.state.highscores} />} />
          <Route component={Lost} />
        </Switch>
      </Router>
    );
  }
}

export default App;
