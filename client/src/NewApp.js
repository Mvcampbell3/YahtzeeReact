import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Test from "./newFrontend/Test";

import LandingPage from "./newFrontend/pages/LandingPage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/test">
                    <Test />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
