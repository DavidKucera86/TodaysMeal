import React from "react";
import { StyledError } from "../components/styles/Error.styled";

const Error = () => {
  return (
    <StyledError>
      <h2>404</h2>
      <p>Page not found</p>
    </StyledError>
  );
};

export default Error;
