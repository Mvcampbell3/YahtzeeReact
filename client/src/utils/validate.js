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

export const validateConfirmPassword = (firstPassword, secondPassword) => {
    const validLength = validatePassword(firstPassword);
    const passMatch = firstPassword === secondPassword;
    if (validLength && passMatch) {
        return true;
    }
    return false;
};
