import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: burlywood;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */


.footer-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;  
  color: ghostwhite;  
  padding: 0.5rem 1rem;

  .proclaimer {
    max-width: 32rem;    

    a {
      &:link,
      &:visited {
        text-decoration: none;
        color: ghostwhite;
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
    margin: 1rem;

    li {
      list-style: none;
    }
    a {
      border: .125rem solid lavender;
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
        border: .125rem solid hotpink;
      }
    }
  }
}

nav {
  text-align: center;
  padding-bottom: 1rem;
}
  
`;
