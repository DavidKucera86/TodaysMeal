import React from "react";
import ImgCook from "./ImgCook";
import Navigation from "./Navigation";
import { StyledHeader } from "./styles/Header.styled";

const Header = () => { 

  return (
    <StyledHeader>
      <div className="navigation">
        <ImgCook url="/images/header-left.png" />  
        <Navigation />              
      </div>
      <h1>Today's Meal</h1>

      
    </StyledHeader>
  );
};

export default Header;
