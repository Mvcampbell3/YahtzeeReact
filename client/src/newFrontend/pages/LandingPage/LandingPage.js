import React from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";

const LandingPage = (props) => {
    return (
        <div className="landing-page-container">
            <div className="dice-picture-panel">
                <div className="dice-picture-container"></div>
                <div className="dice-shadow-container"></div>
            </div>
            <div className="landing-page-panel">
                <div className="page-actions">
                    <div className="action">
                        <Link to="/game">Play Yahtzee</Link>
                    </div>
                    
                    <div className="action">
                    <Link to="/game">View Highscores</Link>

                    </div>

                    <div className="action">
                    <Link to="/login">Login</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
