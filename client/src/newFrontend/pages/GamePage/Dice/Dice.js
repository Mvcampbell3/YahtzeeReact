import React from "react";
import "./Dice.scss";

const Dice = ({ hold, value, type }) => {
    return <div className="dice">{value}</div>;
};

export default Dice;
