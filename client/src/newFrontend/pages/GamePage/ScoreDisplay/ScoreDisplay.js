import React from "react";
import "./ScoreDisplay.scss";

const ScoreDisplay = ({ score, diceArray, checkScore }) => {
    const handleClick = (score, diceArray) => {
        console.log("cliked");
        console.log(score);
        if (!score.saved) {
            checkScore(score, diceArray);
        } else {
            console.log("score already saved");
        }
    };
    return (
        <div className="score-display-container">
            <button
                onClick={() => handleClick(score, diceArray)}
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
