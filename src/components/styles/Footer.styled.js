import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: chocolate;
  color: lavender;
  border-radius: 50%;
  padding: 1rem 0;

  .proclaimer {
    max-width: 32rem;
    margin-right: 6rem;

    a {
      &:link,
      &:visited {
        text-decoration: none;
        color: lavender;
        font-weight: 900;
        transition: all 0.5s linear;
      }

      &:hover,
      &:active {
        color: hotpink;
      }
    }
  }

  .socials {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;
    }
    a {
      border: 1px solid lavender;
      border-radius: 50%;
      color: lavender;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 0.75rem;
      height: 2.5rem;
      width: 2.5rem;
      text-decoration: none;
      transition: all 0.5s linear;

      &:hover,
      &:active {
        transform: scale(1.1);
      }
    }
  }
`;
