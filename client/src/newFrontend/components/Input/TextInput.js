import React from "react";
import "./Input.scss";

const TextInput = (props) => {
    const { label, type, value, setValue, autoComplete } = props;
    return (
        <div className="input-group">
            <label htmlFor="" className="label">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                autoComplete={autoComplete}
            />
        </div>
    );
};

export default TextInput;
