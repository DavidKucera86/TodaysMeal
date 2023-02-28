import styled from "styled-components";

export const StyledMovies = styled.main`
  form {
    text-align: center;
    input {
      font-size: 1.5rem;      
      outline: none;
      border: none;
      border-bottom: 0.25rem solid hotpink;
      border-radius: 50%;
      text-align: center;
      color: dimgray;
      padding: 1rem;
      margin: 0 1rem;
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
`;
