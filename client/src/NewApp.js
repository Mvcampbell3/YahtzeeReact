import React from "react";
// commented out while dev on game

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./newFrontend/pages/LandingPage";
import LoginPageWrapper from "./newFrontend/pages/LoginPage";

import GamePageWrapper from "./newFrontend/pages/GamePage";

import "./NewApp.scss";


const Header = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to='/'>Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/game'>Game</Link>
            </li>
            <li className="nav-item">
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    )
}

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/game">
                    <GamePageWrapper />
                </Route>
                <Route exact path="/login">
                    <LoginPageWrapper />
                </Route>
            </Switch>
        </Router>
    );
};

// const App = () => {
//     return <GamePageWrapper />;
// };

export default App;
