import {
    CREATE_USER,
    LOGIN_USER,
    LOGOUT_USER
} from "../constants/action_types";

// User Actions
export const createUser = payload => {
    return { type: CREATE_USER, payload };
}

export const loginUser = payload => {
    return { type: LOGIN_USER, payload };
}

export const logoutUser = payload => {
    return { type: LOGOUT_USER, payload };
}