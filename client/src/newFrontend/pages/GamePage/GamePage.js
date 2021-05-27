import React from "react";
import Dice from "./Dice";
import "./GamePage.scss";
const GamePage = ({ diceValue, rollDice }) => {
    return (
        <div className="container">
            {/* Some Game Options */}
            <h2>Would you like to play a game?</h2>
            <div className="game-action-holder">
                <button>New Game</button>
                {/* Start Game / New */}
            </div>
            {/* Dice Box */}
            <div className="dice-holder">
                {diceValue.map((dice, i) => (
                    <Dice key={i} value={dice} />
                ))}
            </div>
            {/* Dice Hold Buttons */}
            <div className="dice-hold-holder">
                <div className="dice-hold"></div>
                <div className="dice-hold"></div>
                <div className="dice-hold"></div>
                <div className="dice-hold"></div>
                <div className="dice-hold"></div>
            </div>

            <div className="dice-action-holder">
                <button onClick={rollDice}>roll</button>
                <button>save</button>
            </div>

            {/* Roll Save-Score */}

            {/* Score Board */}
        </div>
    );
};

export default GamePage;
