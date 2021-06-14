import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
    const { handleClick, classes = [] } = props;
    return (
        <button className={classes.join(" ")} onClick={handleClick}>
            {props.children}
        </button>
    );
};

Button.propTypes = {
    handleClick: PropTypes.func,
    classes: PropTypes.arrayOf(PropTypes.string),
};

export default Button;
