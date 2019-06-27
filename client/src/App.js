import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import Game from "./pages/Game"
import Scores from "./pages/Scores"
import Lost from "./pages/Lost"
import Login from "./pages/Login"
import API from "./utils/API";


class App extends Component {
  state = {
    user: false,
    username: null,
  }

  componentDidMount() {
    this.checkUserLoad();
    // this.getHighScores();
  }

  checkUserLoad = () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        API.checkToken()
          .then(result => {
            console.log(result.data.user)
            if (result.data.user) {
              this.setState({ user: result.data.user, username: result.data.username })

            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    } catch{
      console.log("did not work")
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
        <Header />
        <Switch>
          <Route path="/" exact render={props =>
            <HomePage {...props} logoutUser={this.logoutUser} user={this.state.user} username={this.state.username} />}
          />
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
