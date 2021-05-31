import React from "react";
import "./Dice.scss";

const Dice = ({ hold, value, type, holdDice }) => {
    return (
        <div className="dice-container">
            <div className="dice">{value}</div>
            <div
                className={hold ? "hold-button active" : "hold-button"}
                onClick={() => holdDice(type)}
            ></div>
        </div>
    );
};

export default Dice;
