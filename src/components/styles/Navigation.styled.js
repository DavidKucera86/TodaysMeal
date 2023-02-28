import styled from "styled-components";

export const StyledNavigation = styled.nav`
  .nav-list {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    flex-wrap: wrap;
    background-color: peru ;
    border-radius: 5%;
    max-width: 30rem;
    
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
