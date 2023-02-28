import styled from "styled-components";

export const StyledMovies = styled.main`
  form {
    text-align: center;

    input {
      font-size: 1.25rem;
      outline: none;
      border: none;
      border-bottom: 0.25rem solid hotpink;
      border-radius: 50%;
      text-align: center;
      color: dimgray;
      padding: 0.75rem;
      background-color: lavender;
    }
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  }

  article {
    max-width: 19rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(210, 105, 30, 0.25);
    margin: 2rem;
    padding: 1rem;
    transition: all 0.5s linear;

    &:hover {
      transform: scale(1.04);
    }

    img {
      border-radius: 1rem;
    }

    h3 {
      text-align: center;
    }

    a {
      &:visited,
      &:link {
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        border-radius: 3.25rem;
        box-shadow: 0 0 10px rgba(210, 105, 30, 0.55);
        padding: 1rem 3.75rem;
        color: burlywood;
      }
      &:hover,
      &:active {
        background-color: hotpink;
        color: ghostwhite;
      }
    }
  }
`;
