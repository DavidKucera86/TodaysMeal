import styled from "styled-components";

export const StyledOwnRecipes = styled.main`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    input[type="text"] {
      font-size: 1rem;
      max-width: 38rem;
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
      max-width: 38rem;
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
      border: none;
      font-size: 1.5rem;
      font-weight: bold;
      border-radius: 3.25rem;
      box-shadow: 0 0 10px rgba(210, 105, 30, 0.55);
      padding: 1rem 3.75rem;
      color: burlywood;

      &:hover {
        background-color: hotpink;
          color: ghostwhite;
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
        border: none;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 3.25rem;
        box-shadow: 0 0 10px rgba(210, 105, 30, 0.55);
        margin-top: 1rem;
        padding: .5rem 1rem;
        color: burlywood;

        &:hover {
          background-color: hotpink;
            color: ghostwhite;
          cursor: pointer;
      }
        }
      }
    }
  
`;
