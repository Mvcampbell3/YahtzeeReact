import { gameSettings as initialState } from "./initialState";
import {
    CHECK_SCORE,
    RESET_TEST_SCORE,
    SAVE_SCORE,
} from "../constants/action_types";
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
                    score: scoreItem.saved ? scoreItem.score : numberValue,
                    testingScore: scoreItem.saved ? false : true,
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

const resetTestScores = (state) => {
    console.log("resetting test scores");
    const { scoring } = state;
    const newScoringArray = scoring.map((score) => {
        return {
            ...score,
            testingScore: false,
            score: score.saved ? score.score : 0,
        };
    });
    return {
        ...state,
        scoring: newScoringArray,
    };
};

const saveScore = (state) => {
    console.log("saving score");
    const { scoring } = state;

    const testingScoreLength = scoring
        .map((score) => score.testingScore)
        .filter((test) => test === true).length;

    if (testingScoreLength !== 1) {
        console.log("does not have a valid testingScore number");
        return state;
    }

    const newScoringArray = scoring.map((score) => {
        return {
            ...score,
            saved: score.testingScore ? true : score.saved,
            testingScore: false,
        };
    });
    return { ...state, scoring: newScoringArray };
};

const gameSettings = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_SCORE:
            return evalScore(state, action.payload);
        case RESET_TEST_SCORE:
            return resetTestScores(state);
        case SAVE_SCORE:
            return saveScore(state);
        default:
            return state;
    }
};

export default gameSettings;
