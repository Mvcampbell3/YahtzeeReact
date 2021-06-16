import { diceSettings as initialState } from "./initialState";
import { ROLL_DICE, HOLD_DICE, RESET_DICE } from "../constants/action_types";
import { checkYahtzee } from "../../utils/helpers";

// Allows for 3 rolls, then stops rolling
// There will also be a Component level check for this
const rollDice = (state) => {
    const { diceArray, rollCount } = state;
    if (rollCount >= 1) {
        let newDiceArray = [];
        diceArray.forEach((dice) => {
            let value;
            if (!dice.hold) {
                const ranNum = Math.floor(Math.random() * 6 + 1);
                value = ranNum;
            } else {
                value = dice.value;
            }
            newDiceArray.push({ ...dice, value });
        });
        let newRollCount = rollCount - 1;
        const isYahtzee = checkYahtzee(newDiceArray);
        return {
            ...state,
            diceArray: newDiceArray,
            // comment out rollCount to stop decrement on roll
            // rollCount: newRollCount,
            hasYahtzee: isYahtzee,
        };
    }
    return state;
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
    const newDiceArray = state.diceArray.map((dice, i) => {
        return { ...dice, value: 0, hold: false };
    });
    const newRoundCount = state.roundCount > 1 ? state.roundCount-- : 13;
    return {
        ...state,
        diceArray: newDiceArray,
        rollCount: 3,
        rolling: false,
        roundCount: newRoundCount,
    };
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
