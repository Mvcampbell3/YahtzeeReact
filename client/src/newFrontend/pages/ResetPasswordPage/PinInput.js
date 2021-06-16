import React from "react";
import "./PinInput.scss";
const PinInput = ({ pin, setPin, ...props }) => {
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.value.length <= 6) {
            setPin(e.target.value);
        }
    };

    return (
        <div className="pin-input-container">
            <input
                type="number"
                onChange={(e) => handleChange(e)}
                value={pin}
            ></input>
        </div>
    );
};

export default PinInput;
