import { diceSettings as initialState } from "./initialState";
import { ROLL_DICE, HOLD_DICE, RESET_DICE } from "../constants/action_types";

const rollDice = (state) => {
    const { diceArray } = state;
    let newDiceArray = [];
    diceArray.forEach((dice) => {
        let value;
        if (!dice.hold) {
            const ranNum = Math.floor(Math.random() * 5 + 1);
            value = ranNum;
        } else {
            value = dice.value;
        }
        newDiceArray.push({ ...dice, value });
    });
    return { ...state, diceArray: newDiceArray };
};

const holdDice = (state, payload) => {
    const { diceArray } = state;
    const newArray = diceArray.map((dice) => {
        if (dice.type !== payload) {
            return dice;
        }
        return {
            ...dice,
            hold: !dice.hold,
        };
    });
    return { ...state, diceArray: newArray };
};

const resetDice = (state) => {
    return state;
};

const diceSettings = (state = initialState, action) => {
    switch (action.type) {
        case ROLL_DICE:
            console.log("rolling dice");
            return rollDice(state);
        case HOLD_DICE:
            console.log("holding dice");
            return holdDice(state, action.payload);
        case RESET_DICE:
            console.log("resetting dice");
            return resetDice(state);
        default:
            return state;
    }
};

export default diceSettings;
