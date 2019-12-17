import React from "react";
import PropTypes from "prop-types";

import { ButtonTypes, ButtonSizes } from "./buttonTypes";

import "./button.css";

const Button  = ({ size, theme, type, label }) => {

    const getButtonClasses = () => {
      const classOptions = [
        "button",
        `button--${size}`,
        `button--${theme}`,
        `button--${type}`
      ];
    
      return classOptions.join(" ");
    }

    return (
      <a
        className={getButtonClasses()}
        href="https://emailoctopus.com/lists/6094294a-2098-11ea-be00-06b4694bee2a/forms/subscribe"
      >
        {label}
      </a>
    );
}

Button.propTypes = {
  type: PropTypes.oneOf(Object.values(ButtonTypes)),
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(ButtonSizes))
};

Button.defaultProps = {
  type: ButtonTypes.PRIMARY,
  label: "",
  size: ButtonSizes.MEDIUM
};

export default Button;