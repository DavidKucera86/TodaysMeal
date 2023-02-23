import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <NavLink to="/">Home</NavLink><br />
            <NavLink to="/movies">Movie to the meal</NavLink><br />
            <NavLink to="/own-rec">Your own recipes</NavLink>
        </nav>
        <img src="/images/header-img.png" alt="happy cooks" />
        <h1>Today's Meal</h1>
    </header>
  )
}

export default Header