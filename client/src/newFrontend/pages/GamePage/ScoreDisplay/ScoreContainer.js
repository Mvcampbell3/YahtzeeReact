import React from "react";
import { ScoreDisplay } from "./";

const ScoreContainer = ({ scoring }) => {
    return (
        <div className="score-container">
            {scoring.map((score, i) => (
                <ScoreDisplay score={score} key={i} />
            ))}
        </div>
    );
};

export default ScoreContainer;
