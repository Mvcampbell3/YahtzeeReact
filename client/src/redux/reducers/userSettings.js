import { userSettings as initialState } from "./initialState";
import {
    CREATE_USER,
    LOGIN_USER,
    LOGOUT_USER,
} from "../constants/action_types";

const userSettings = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.payload.user,
                username: action.payload.username,
            };
        case LOGOUT_USER:
            return { ...state, user: false, username: "" };
        case LOGIN_USER:
        default:
            return state;
    }
};

export default userSettings;
