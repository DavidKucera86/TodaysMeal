import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
      
  .nav-list {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
    flex-wrap: wrap;
    background-color: peru ;
    border-radius: 5%;
        
    a {
      &:link,
      &:visited {
        text-decoration: none;
        color: ghostwhite;
        font-weight: 900;
        padding: 0 2rem;
        transition: all 0.5s linear;
      }

      &:hover,
      &:active {
        color: hotpink;
      }
    }
  }

  button {
    display: block;
    background-color: transparent;
    border: none;

    .hamburger-icon {
      color: ghostwhite;
      font-size: 3rem;    
      margin-right: 1rem;
      &:hover {
        color: hotpink;
        cursor: pointer;
      }
    }
  }

  .hide {
    height: 0;
    overflow: hidden;
    transition: all 0.1s linear;
  }

  .show {
    height: 9rem;
  }
`;
