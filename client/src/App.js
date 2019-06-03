import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import Home from "./pages/Home"
import Scores from "./pages/Scores"
import Lost from "./pages/Lost"

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={props => <Home {...props} />} />
          <Route path="/score" exact render={props => <Scores {...props} />} />
          <Route component={Lost} />
        </Switch>
      </Router>
    );
  }
}

export default App;
