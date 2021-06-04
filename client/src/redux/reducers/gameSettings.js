import { gameSettings as initialState } from "./initialState";
import { CHECK_SCORE } from "../constants/action_types";
import * as checkScore from "../../utils/helpers";

// do we want this to be one big fucking switch? I don't think that is a good idea...
const evalScore = (state, payload) => {
    const { score, diceArray } = payload;
    const { scoring } = state;
    switch (score.type) {
        case "upper":
            const numberValue = checkScore.checkNumber(diceArray, score.value);
            const newScoringArray = scoring.map((scoreItem) => {
                if (scoreItem.scoreType !== score.scoreType) {
                    return {
                        ...scoreItem,
                        score: scoreItem.saved ? scoreItem.score : 0,
                        testingScore: false,
                    };
                }
                return {
                    ...scoreItem,
                    score: numberValue,
                    testingScore: true,
                };
            });
            return {
                ...state,
                scoring: newScoringArray,
            };
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
