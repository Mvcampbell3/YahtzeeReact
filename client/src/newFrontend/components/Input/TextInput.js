import React, { useState } from "react";
import "./Input.scss";
import PropTypes from "prop-types";
import * as validators from "../../../utils/validate";

const TextInputError = ({ error }) => {
    return <p className="error-message">{error.message}</p>;
};

TextInputError.propTypes = {
    error: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }).isRequired,
};

const TextInput = (props) => {
    const {
        label,
        type,
        value,
        setValue,
        autoComplete,
        validate = false,
        validationType,
        icon,
        confirmString,
    } = props;
    console.log(validationType);
    const [hasErrors, setHasErrors] = useState([]);

    const handleValidate = (e) => {
        e.preventDefault();
        console.log(type, validate, validationType);
        if (!validate) return;
        console.log("validating... ", type);
        switch (validationType) {
            case "email":
                if (!validators.validateEmail(value)) {
                    console.log("We have an email error");
                    setHasErrors(["Email address must be valid"]);
                } else {
                    console.log("we do not have an email error");
                    setHasErrors([]);
                }
                break;
            case "username":
            case "password":
                if (!validators.validatePassword(value)) {
                    setHasErrors([
                        "Password must be at least 6 characters long",
                    ]);
                } else {
                    setHasErrors([]);
                }
                break;
            case "confirm-password":
                if (!validators.validateConfirmPassword(value, confirmString)) {
                    setHasErrors([
                        "Passwords must match and be at least 6 characters long",
                    ]);
                } else {
                    setHasErrors([]);
                }
                break;
            default:
                console.log(`${validationType} validation not yet set up`);
        }
    };

    return (
        <div className="input-group">
            <label htmlFor="" className="label">
                {label}
            </label>
            <div className="input-container">
                {icon && (
                    <div className="input-group__icon">
                        <i className={icon}></i>
                    </div>
                )}

                <input
                    className={`input input-${type}`}
                    type={type}
                    value={value}
                    onBlur={(e) => handleValidate(e)}
                    onChange={(e) => setValue(e.target.value)}
                    autoComplete={autoComplete}
                />
            </div>

            {hasErrors.length > 0 &&
                hasErrors.map((err, i) => (
                    <TextInputError key={i} error={{ message: err }} />
                ))}
        </div>
    );
};

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    autoComplete: PropTypes.string.isRequired,
    validate: PropTypes.bool.isRequired,
    validationType: PropTypes.string,
    icon: PropTypes.string,
    confirmString: PropTypes.string,
};

export default TextInput;
