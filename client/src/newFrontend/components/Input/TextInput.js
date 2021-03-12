import React from "react";
import "./Input.scss";
import PropTypes from 'prop-types';

const TextInput = (props) => {
    const { label, type, value, setValue, autoComplete } = props;
    return (
        <div className="input-group">
            <label htmlFor="" className="label">
                {label}
            </label>
            <input
                className={`input input-${type}`}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                autoComplete={autoComplete}
            />
        </div>
    );
};

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    autoComplete: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default TextInput;
