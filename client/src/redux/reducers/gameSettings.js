import { gameSettings as initialState } from "./initialState";
import { CHECK_SCORE } from "../constants/action_types";
import * as checkScore from "../../utils/helpers";

const evalScore = (state, payload) => {
    console.log(state)
    console.log("evalscore", payload);
    const { score, diceArray } = payload;
    switch (score.type) {
        case "upper":
            console.log("upper type");
            const numberValue = checkScore.checkNumber(diceArray, score.value);
            console.log(numberValue);
            return state;
        default:
            return state;
    }
};

const gameSettings = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_SCORE:
            return evalScore(state, action.payload);
        default:
            return state;
    }
};

export default gameSettings;
