import { combineReducers } from "redux";

import userSettings from "./userSettings";
import gameSettings from "./gameSettings";
const reducers = {
    userSettings,
    gameSettings,
};

const app = combineReducers(reducers);
export default app;

// Selectors
export const checkState = (state) => {
    return state;
};

export const getUserSettings = (state) => {
    const { userSettings } = state;
    return { userSettings };
};

export const getGameSettings = (state) => {
    const { gameSettings } = state;
    return { gameSettings };
};

export const getDiceValue = (state) => {
    const {
        gameSettings: { diceHold, diceValue },
    } = getGameSettings(state);
    return { diceValue, diceHold };
};
