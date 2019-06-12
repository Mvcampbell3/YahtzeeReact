import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import Game from "./pages/Game"
import Scores from "./pages/Scores"
import Lost from "./pages/Lost"


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={props => <HomePage {...props} />} />
          <Route path="/game" exact render={props => <Game {...props} />} />
          <Route path="/scores" exact render={props => <Scores {...props} />} />
          <Route component={Lost} />
        </Switch>
      </Router>
    );
  }
}

export default App;
