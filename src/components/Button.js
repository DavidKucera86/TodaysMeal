import React from "react";

import { StyledButton } from "./styles/Button.styled";

const Button = ({ url, text, target, isDetail }) => {
  return (
    <StyledButton>
      <a href={url} target={target} rel="noreferrer">
        {text}
      </a>
    </StyledButton>
  );
};

export default Button;
