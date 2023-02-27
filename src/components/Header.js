import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledHeader } from './styles/Header.styled'

const Header = () => {
  return (
    <StyledHeader>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movie to the meal</NavLink>
            <NavLink to="/recipes">Your own recipes</NavLink>
        </nav>
        <img src="/images/header-img.png" alt="happy cooks" />
        <h1>Today's Meal</h1>
    </StyledHeader>
  )
}

export default Header