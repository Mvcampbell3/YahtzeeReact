import React from "react";
import "./ScoreDisplay.scss";

const ScoreDisplay = ({ score }) => {
    return (
        <div className="score-display-container">
            <button
                className={`scoring-button ${score.saved && "saved"}`}
            ></button>
            <span className="score-name">{score.name}</span>
            <span className="score-value">{score.score}</span>
        </div>
    );
};

const TestDisplay = ({ score }) => {
    return (
        <>{score.type === "upper" ? <ScoreDisplay score={score} /> : null}</>
    );
};

export default TestDisplay;
