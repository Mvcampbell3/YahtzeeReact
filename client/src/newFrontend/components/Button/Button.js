import React from "react";
import "./Button.scss";

const Button = (props) => {
    const { handleClick, classes } = props;
    return (
        <button className={classes.join(" ")} onClick={handleClick}>
            {props.children}
        </button>
    );
};

export default Button;
