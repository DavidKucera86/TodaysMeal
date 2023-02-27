import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledHeader } from './styles/Header.styled'

const Header = () => {

    const scrollToTop = () => {
      window.scrollTo(0,0)
    }

  return (
    <StyledHeader>
        <nav>
            <NavLink to="/" onClick={scrollToTop} >Home</NavLink>
            <NavLink to="/movies" onClick={scrollToTop}>Movie to the meal</NavLink>
            <NavLink to="/recipes" onClick={scrollToTop}>Your own recipes</NavLink>
        </nav>
        <img src="/images/header-img.png" alt="happy cooks" />
        <h1>Today's Meal</h1>
    </StyledHeader>
  )
}

export default Header