import React from "react";
import DiceWrapper from "./Dice";
import "./GamePage.scss";
const GamePage = ({ diceArray, rollDice, resetDice }) => {
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
                    <button onClick={resetDice}>reset</button>
                    <button>save</button>
                </div>

                {/* Roll Save-Score */}

                {/* Score Board */}
            </div>
        </div>
    );
};

export default GamePage;
