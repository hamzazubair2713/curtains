import React from "react";
import { InputStyled, StyledTextField } from "./TextField.styles";

import Image from "next/image";

const Input = ({
  name,
  label,
  error,
  toolTip,
  className,
  hasIcon,
  disabled,
  ...rest
}) => {
  return (
    <StyledTextField className={className}>
      {label && (
        <label htmlFor={name} className="label">
          {label}
        </label>
      )}
      <InputStyled
        $error={error}
        className="inputstyle_custom"
        $hasIcon={hasIcon}
        $disable={disabled}
      >
        <div className="iconWrapper">{hasIcon}</div>
        <input {...rest} id={name} disabled={disabled} name={name} />
      </InputStyled>
    </StyledTextField>
  );
};

export default Input;
