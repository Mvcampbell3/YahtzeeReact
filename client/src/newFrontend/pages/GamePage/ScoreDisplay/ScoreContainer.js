import React from "react";
import { ScoreDisplayWrapper } from "./";

const ScoreContainer = ({ scoring }) => {
    return (
        <div className="score-container">
            {scoring
                .sort((a, b) => a.order - b.order)
                .map((score, i) => {
                    return <ScoreDisplayWrapper score={score} key={i} />;
                })}
        </div>
    );
};

export default ScoreContainer;
