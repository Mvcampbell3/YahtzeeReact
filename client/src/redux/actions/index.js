import * as types from "../constants/action_types";

// User Actions
export const createUser = (payload) => {
    return { type: types.CREATE_USER, payload };
};

export const loginUser = (payload) => {
    return { type: types.LOGIN_USER, payload };
};

export const logoutUser = (payload) => {
    return { type: types.LOGOUT_USER, payload };
};

export const rollDice = () => {
    return { type: types.ROLL_DICE };
};

export const holdDice = (payload) => {
    return { type: types.HOLD_DICE, payload };
};

export const resetDice = () => {
    return { type: types.RESET_DICE };
};

export const checkScore = (score, diceArray) => {
    return { type: types.CHECK_SCORE, payload: { score, diceArray } };
};

export const resetTestScores = () => {
    return { type: types.RESET_TEST_SCORE };
};

export const saveScore = () => {
    return { type: types.SAVE_SCORE };
};
