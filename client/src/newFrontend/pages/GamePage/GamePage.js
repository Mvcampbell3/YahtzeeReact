import React from "react";
import DiceWrapper from "./Dice";
import ScoreContainerWrapper from "./ScoreDisplay";
import "./GamePage.scss";
const GamePage = ({
    diceArray,
    rollDice,
    resetDice,
    resetTestScores,
    saveScore,
}) => {
    const handleReset = () => {
        resetDice();
        resetTestScores();
    };
    return (
        <div className="container flex-center-simple">
            <div className="main-game">
                {/* Some Game Options */}

                <h2>Would you like to play a game?</h2>

                {/* Start Game / New */}

                <div className="game-action-holder">
                    <button>New Game</button>
                </div>

                {/* Dice Box */}

                <div className="dice-holder">
                    {diceArray.map((dice, i) => (
                        <DiceWrapper key={i} dice={dice} />
                    ))}
                </div>

                {/* Game Actions */}

                <div className="dice-action-holder">
                    <button onClick={rollDice}>roll</button>
                    <button onClick={handleReset}>reset</button>
                    <button onClick={saveScore}>save</button>
                </div>

                {/* Roll Save-Score */}

                {/* Score Board */}
                <ScoreContainerWrapper />
            </div>
        </div>
    );
};

export default GamePage;
