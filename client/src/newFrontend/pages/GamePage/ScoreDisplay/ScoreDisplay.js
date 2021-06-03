import React from "react";
import "./ScoreDisplay.scss";

const ScoreDisplay = ({ score, diceArray, checkScore }) => {
    console.log(diceArray);
    return (
        <div className="score-display-container">
            <button
                onClick={() => checkScore(score, diceArray)}
                className={`scoring-button ${score.saved && "saved"}`}
            ></button>
            <span className="score-name">{score.name}</span>
            <span className="score-value">{score.score}</span>
        </div>
    );
};

const TestDisplay = ({ score, diceArray, checkScore }) => {
    return (
        <>
            {score.type === "upper" ? (
                <ScoreDisplay
                    score={score}
                    diceArray={diceArray}
                    checkScore={checkScore}
                />
            ) : null}
        </>
    );
};

export default TestDisplay;
