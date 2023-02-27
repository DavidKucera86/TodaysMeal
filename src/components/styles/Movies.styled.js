import styled from "styled-components";

export const StyledMovies = styled.main`

form {
    text-align: center;
    input {
        font-size: 2rem;
        max-width: 500px;
        outline: none;
        border: none;
        border-bottom: .25rem solid hotpink;
        border-radius: 50%;
        text-align: center;
        color: dimgray;
        padding: 1rem;
        background-color: lavender;
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

      img {
        border-radius: 1rem;
      }

      h3 {
        text-align: center;
      }

      a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        div {
            margin-left: 1rem;
        }
        
        &:visited,
        &:link {
          text-decoration: none;
          font-size: 1.5rem;
          border-radius: 3.25rem;
          box-shadow: 0 0 10px rgba(210, 105, 30, 0.55);
          padding: 1rem 3.75rem;
          color: deeppink;
        }
        &:hover,
        &:active {
          background-color: lavender;
        }
      }
    }
  }
`