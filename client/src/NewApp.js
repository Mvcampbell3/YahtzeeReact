import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Test from "./newFrontend/Test";

import LandingPage from "./newFrontend/pages/LandingPage";
import LoginPageWrapper from "./newFrontend/pages/LoginPage";

const Header = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to='/'>Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/test'>Test</Link>
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
                <Route exact path="/test">
                    <Test />
                </Route>
                <Route exact path="/login">
                    <LoginPageWrapper />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
