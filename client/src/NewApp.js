import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
    LoginPageWrapper,
    LandingPage,
    GamePageWrapper,
    ResetPasswordPageWrapper,
} from "./newFrontend/pages";

import Header from "./newFrontend/components/Header";

import "./NewApp.scss";

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
                <Route path="/reset/:email">
                    <ResetPasswordPageWrapper />
                </Route>
                <Route path="*">
                    <h1>This is the lost page</h1>
                </Route>
            </Switch>
        </Router>
    );
};

// const App = () => {
//     return <GamePageWrapper />;
// };

export default App;
