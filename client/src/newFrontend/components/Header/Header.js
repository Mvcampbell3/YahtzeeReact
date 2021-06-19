import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import "./Header.scss";

const Header = (props) => {
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
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/game">Play</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">Highscores</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Header;
