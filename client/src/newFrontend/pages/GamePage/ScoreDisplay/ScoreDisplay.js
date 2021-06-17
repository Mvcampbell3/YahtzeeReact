import React from "react";
import "./ScoreDisplay.scss";

const ScoreDisplay = ({ score, diceArray, checkScore }) => {
    const handleClick = (score, diceArray) => {
        if (!score.saved) {
            checkScore(score, diceArray);
        } else {
            console.log("score already saved");
        }
    };
    return (
        <div className="score-display-container">
            {score.scoreType !== "TOTAL" && (
                <button
                    onClick={() => handleClick(score, diceArray)}
                    className={`scoring-button ${score.saved && "saved"} ${
                        score.testingScore && "testing"
                    }`}
                ></button>
            )}

            <span className="score-name">{score.name}</span>
            <span className="score-value">{score.score}</span>
        </div>
    );
};

export default ScoreDisplay;
