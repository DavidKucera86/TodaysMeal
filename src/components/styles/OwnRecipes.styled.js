import styled from "styled-components";

export const StyledOwnRecipes = styled.main`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    input[type="text"] {
      font-size: 1rem;
      width: 38rem;
      outline: none;
      border: none;
      border-bottom: 0.25rem solid hotpink;
      border-radius: 1%;
      text-align: left;
      color: dimgray;
      padding: 0.5rem;
      margin-bottom: 1rem;
      background-color: lavender;
    }

    textarea {
      font-size: 1rem;
      width: 38rem;
      height: 10rem;
      outline: none;
      border: none;
      border-bottom: 0.25rem solid hotpink;
      border-radius: 2%;
      text-align: left;
      color: dimgray;
      padding: 0.5rem;
      margin-bottom: 1rem;
      background-color: lavender;
    }

    input[type="submit"] {
      font-size: 1.5rem;
      border: none;
      border-radius: 3.25rem;
      box-shadow: 0 0 10px rgba(210, 105, 30, 0.55);
      margin-bottom: 1rem;
      padding: 1rem 3.75rem;
      color: deeppink;
      transition: all 0.5s linear;

      &:hover {
        color: chocolate;
        cursor: pointer;
      }
    }
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;

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

      button {
        font-size: 1rem;
        border: none;
        border-radius: 3.25rem;
        box-shadow: 0 0 10px rgba(210, 105, 30, 0.55);
        margin-top: 0.5rem;
        padding: 0.5rem 2rem;
        color: deeppink;
      }
    }
  }
`;
