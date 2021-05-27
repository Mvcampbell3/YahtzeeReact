import { gameSettings as initialState } from "./initialState";
import { ROLL_DICE } from "../constants/action_types";

const rollDice = () => {
    let diceArr = [];
    for (let i = 0; i < 5; i++) {
        const ranNum = Math.floor(Math.random() * 6 + 1);
        diceArr.push(ranNum);
        if (i === 4) {
            return diceArr;
        }
    }
};

const gameSettings = (state = initialState, action) => {
    switch (action.type) {
        case ROLL_DICE:
            const diceValue = rollDice();
            return { ...state, diceValue };
        default:
            return state;
    }
};

export default gameSettings;
