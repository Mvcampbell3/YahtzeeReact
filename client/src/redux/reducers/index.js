import initialState from "../../initialState";
import {
    CREATE_USER,
    LOGIN_USER,
    LOGOUT_USER,
} from "../constants/action_types";

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
        case CREATE_USER:
            return {
                ...state,
                user: action.payload.user,
                username: action.payload.username,
            };
        case LOGOUT_USER:
            return { ...state, user: false, username: "" };
        default:
            return state;
    }
};

export default rootReducer;
