import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Game from "./pages/Game"
import Scores from "./pages/Scores"
import Lost from "./pages/Lost"
import Login from "./pages/Login"
import UserPage from "./pages/UserPage"

const Routes = (props) => {
    const {
        logoutUser,
        user,
        username,
        loadedUser,
        userID,
        highscores
    } = props;
    console.log(props);
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={routeProps =>
            <HomePage
              {...routeProps}
              logoutUser={logoutUser}
              user={user}
              username={username}
              loadedUser={loadedUser}
            />}
          />
          <Route path="/userpage" exact render={routeProps =>
            <UserPage user={user} username={username} userID={userID} />}
          />
          <Route path="/login" exact render={routeProps =>
            <Login {...routeProps}
              user={user}
              username={username}
              changeUserStatus={this.changeUserStatus}
            />}
          />
          <Route path="/game" exact render={routeProps => <Game {...routeProps} user={user} username={username} />} />
          <Route path="/scores" exact render={routeProps => <Scores {...routeProps} user={user} username={username} scores={highscores} />} />
          <Route component={Lost} />
        </Switch>
      </Router>
    );
}

export default Routes;
