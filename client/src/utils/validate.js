// -------------------------------------------------------------------------
// TODO: Return Error string describing the actual error
// -------------------------------------------------------------------------

export const validateEmail = (email) => {
    if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
        )
    ) {
        return true;
    }
    return false;
};

export const validatePassword = (password) => {
    return password.length >= 6 ? true : false;
};
