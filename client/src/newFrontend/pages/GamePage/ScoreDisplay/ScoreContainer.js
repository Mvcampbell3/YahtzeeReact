import React from "react";
import { ScoreDisplayWrapper } from "./";

const ScoreContainer = ({ scoring }) => {
    return (
        <div className="score-container">
            {scoring.map((score, i) => (
                <ScoreDisplayWrapper score={score} key={i} />
            ))}
        </div>
    );
};

export default ScoreContainer;
