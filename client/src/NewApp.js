import React, { useEffect, useState } from "react";

import { useLocation } from "react-router";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
    LoginPageWrapper,
    LandingPage,
    GamePageWrapper,
    ResetPasswordPageWrapper,
} from "./newFrontend/pages";

import "./NewApp.scss";

const Header = () => {
    const location = useLocation();
    const { pathname } = location;
    const [displayHeader, setDisplayHeader] = useState(false);

    useEffect(() => {
        setDisplayHeader(() => {
            return pathname !== "/";
        });
    }, [pathname]);

    return (
        <>
            {displayHeader && (
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/game">Game</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            )}
        </>
    );
};

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
