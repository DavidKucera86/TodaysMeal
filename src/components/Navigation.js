import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { StyledNavigation } from "./styles/Navigation.styled";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <StyledNavigation>    
      <button onClick={() => setShowMenu(!showMenu)}>
        <GiHamburgerMenu className="hamburger-icon" />
      </button>  
      <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
        <NavLink to="/" onClick={scrollToTop}>
          Home
        </NavLink>
        <NavLink to="/movies" onClick={scrollToTop}>
          Movie to the meal
        </NavLink>
        <NavLink to="/recipes" onClick={scrollToTop}>
          Your own recipes
        </NavLink>
      </div>      
    </StyledNavigation>
  );
};

export default Navigation;
