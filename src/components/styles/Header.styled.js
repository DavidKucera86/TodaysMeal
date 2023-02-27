import styled from "styled-components";

export const StyledHeader = styled.header`
  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: chocolate;
    border-radius: 50%;
    position: fixed;
    width: 66%;
    z-index: 100;
    margin-top: 1rem;

    a {
      &:link,
      &:visited {
        text-decoration: none;
        color: lavender;
        font-weight: 900;
        padding: 1rem 0 1rem 2rem;
        transition: all 0.5s linear;
      }

      &:hover,
      &:active {
        color: hotpink;
      }
    }
  }

  img {
    margin-top: 2rem;
  }

  h1 {
    text-align: center;
  }
`;
