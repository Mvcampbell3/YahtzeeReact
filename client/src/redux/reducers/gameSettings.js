import { gameSettings as initialState } from "./initialState";
import {
    CHECK_SCORE,
    RESET_TEST_SCORE,
    SAVE_SCORE,
} from "../constants/action_types";
import * as checkScore from "../../utils/helpers";
import { ScoreTypes } from "../ENUMS";

// do we want this to be one big fucking switch? I don't think that is a good idea...
// If we can return helper functions, it would be a pretty solid solution
const evalScore = (state, payload) => {
    const { score } = payload;
    switch (score.scoreType) {
        case ScoreTypes.ONES:
        case ScoreTypes.TWOS:
        case ScoreTypes.THREES:
        case ScoreTypes.FOURS:
        case ScoreTypes.FIVES:
        case ScoreTypes.SIXES:
            return numberEval(state, payload);
        case ScoreTypes.THREE_OF_KIND:
            return numberOfKind(state, payload, 3);
        case ScoreTypes.FOUR_OF_KIND:
            console.log("four of kind");
            return numberOfKind(state, payload, 4);
        default:
            console.log(score);
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

// Eval Score Return State Functions
const numberEval = (state, payload) => {
    const { score, diceArray } = payload;
    const numberValue = checkScore.checkNumber(diceArray, score.value);
    const newScoringArray = updateScoringArray(state, payload, numberValue);
    return {
        ...state,
        scoring: newScoringArray,
    };
};

const numberArrayFormatter = (diceArray) => {
    const numberMap = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    for (let key in numberMap) {
        const numArray = diceArray.filter((dice) => dice.value === Number(key));
        numberMap[key] = numArray;
    }
    return numberMap;
};

// When clicking a different score, it does not reset of kind score to zero
// When click a not-valid score, the original test score does not revert to zero
// Root of problem is need to remove test scores value && reset testing bool even if fails check

const numberOfKind = (state, payload, target) => {
    const { diceArray } = payload;
    const numberMap = numberArrayFormatter(diceArray);
    let isValidOfKind = false;
    for (let key in numberMap) {
        if (numberMap[key].length >= target) {
            isValidOfKind = true;
        }
    }
    if (isValidOfKind) {
        const numberValue = diceArray
            .map((dice) => dice.value)
            .reduce((amt, tot) => amt + tot);
        return {
            ...state,
            scoring: updateScoringArray(state, payload, numberValue),
        };
    }
    // this will not updateScoringArray ..
    return state;
};

const updateScoringArray = (state, payload, numberValue) => {
    console.log("updating score array");
    // NumberValue is whatever it is we are setting the new score to be
    const { score } = payload;
    const { scoring } = state;

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

    return newScoringArray;
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
