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
            return numberOfKind(state, payload, 4);
        case ScoreTypes.FULL_HOUSE:
            return fullHouse(state, payload);
        case ScoreTypes.SMALL_STRAIGHT:
            return straight(state, payload, "small");
        case ScoreTypes.LARGE_STRAIGHT:
            return straight(state, payload, "large");
        case ScoreTypes.YAHTZEE:
            return yahtzee(state, payload);
        case ScoreTypes.CHANCE:
            return chance(state, payload);
        default:
            console.log("default");
            console.log(score);
            return state;
    }
};

const resetTestScores = (state) => {
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
    const { scoring } = state;

    const testingScoreLength = scoring
        .map((score) => score.testingScore)
        .filter((test) => test === true).length;

    if (testingScoreLength !== 1) {
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

const numberArrayFormatter = (diceArray) => {
    const numberMap = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    for (let key in numberMap) {
        const numArray = diceArray.filter((dice) => dice.value === Number(key));
        numberMap[key] = numArray;
    }
    return numberMap;
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

const numberOfKind = (state, payload, target) => {
    const { diceArray } = payload;
    const numberMap = numberArrayFormatter(diceArray);
    let isValidOfKind = false;
    for (let key in numberMap) {
        if (numberMap[key].length >= target) {
            isValidOfKind = true;
        }
    }
    const numberValue = diceArray
        .map((dice) => dice.value)
        .reduce((amt, tot) => amt + tot);

    return {
        ...state,
        scoring: updateScoringArray(
            state,
            payload,
            isValidOfKind ? numberValue : 0,
        ),
    };
};

const fullHouse = (state, payload) => {
    const { diceArray } = payload;
    const numberMap = numberArrayFormatter(diceArray);
    let hasThreeOfKind = false;
    let hasPair = false;
    for (let key in numberMap) {
        if (numberMap[key].length === 3) {
            hasThreeOfKind = true;
        }
        if (numberMap[key].length === 2) {
            hasPair = true;
        }
    }
    return {
        ...state,
        scoring: updateScoringArray(
            state,
            payload,
            hasPair && hasThreeOfKind ? 25 : 0,
        ),
    };
};

const straight = (state, payload, size) => {
    const { diceArray } = payload;
    const diceArrayValues = diceArray.map((dice) => dice.value);
    let isStraight = checkScore.checkStraight(diceArrayValues, size);
    return {
        ...state,
        scoring: updateScoringArray(
            state,
            payload,
            isStraight ? (size === "small" ? 30 : 40) : 0,
        ),
    };
};

const yahtzee = (state, payload) => {
    const { diceArray } = payload;
    const diceArrayValues = diceArray.map((dice) => dice.value);
    return {
        ...state,
        scoring: updateScoringArray(
            state,
            payload,
            diceArrayValues.filter((val) => diceArrayValues[0]).length === 5
                ? 50
                : 0,
        ),
    };
};

const chance = (state, payload) => {
    const { diceArray } = payload;
    const diceArrayValues = diceArray.map((dice) => dice.value);
    const total = diceArrayValues.reduce((amt, tot) => amt + tot);
    return { ...state, scoring: updateScoringArray(state, payload, total) };
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

    return updateTotalArray(newScoringArray);
};

const updateTotalArray = (newScoringArray) => {
    const upperSubTotal = newScoringArray
        .filter((scoreItem) => scoreItem.type === "upper")
        .map((scoreItem) => scoreItem.score)
        .reduce((amt, tot) => amt + tot);

    const lowerSubTotal = newScoringArray
        .filter((scoreItem) => scoreItem.type === "lower")
        .map((scoreItem) => scoreItem.score)
        .reduce((amt, tot) => amt + tot);

    const totalScoringArray = newScoringArray.map((scoreItem) => {
        switch (scoreItem.scoreType) {
            case ScoreTypes.UPPER_SUB_TOTAL:
                return { ...scoreItem, score: upperSubTotal };
            case ScoreTypes.LOWER_TOTAL:
                return { ...scoreItem, score: lowerSubTotal };
            case ScoreTypes.UPPER_BONUS:
                return { ...scoreItem, score: upperSubTotal >= 63 ? 35 : 0 };
            case ScoreTypes.UPPER_TOTAL:
                return {
                    ...scoreItem,
                    score:
                        upperSubTotal >= 63
                            ? upperSubTotal + 35
                            : upperSubTotal,
                };
            case ScoreTypes.TOTAL:
                return {
                    ...scoreItem,
                    score:
                        upperSubTotal >= 63
                            ? upperSubTotal + lowerSubTotal + 35
                            : upperSubTotal + lowerSubTotal,
                };
            default:
                return scoreItem;
        }
    });

    return totalScoringArray;
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
