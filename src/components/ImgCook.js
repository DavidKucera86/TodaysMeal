import React from "react";
import { StyledImgCooks } from "./styles/ImgCooks.styled";

const ImgCook = ({ url }) => {
  return (
    <StyledImgCooks>
      <a href="/">
      <img src={url} alt="happy cooks" />
      </a>
    </StyledImgCooks>
  );
};

export default ImgCook;
