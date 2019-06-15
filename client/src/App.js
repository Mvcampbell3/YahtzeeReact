import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import Game from "./pages/Game"
import Scores from "./pages/Scores"
import Lost from "./pages/Lost"
import Login from "./pages/Login"


class App extends Component {
  state = {
    user: false,
    username: null
  }

  changeUserStatus = (user, username) => {
    this.setState({ user: user, username: username });
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={props => <HomePage {...props} user={this.state.user} username={this.state.username} />} />
          <Route path="/login" exact render={props =>
            <Login {...props} user={this.state.user} username={this.state.username} changeUserStatus={this.changeUserStatus} />}
          />
          <Route path="/game" exact render={props => <Game {...props} user={this.state.user} username={this.state.username} />} />
          <Route path="/scores" exact render={props => <Scores {...props} user={this.state.user} username={this.state.username} />} />
          <Route component={Lost} />
        </Switch>
      </Router>
    );
  }
}

export default App;
