import styled from "styled-components";

export const StyledDetail = styled.main`
    max-width: 19rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
        margin-bottom: .5rem;
    }

    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        span {
            margin-left: 1rem;
        }
        
        &:visited,
        &:link {
          text-decoration: none;
          font-size: 1.25rem;
          border-radius: 3.25rem;
          box-shadow: 0 0 10px rgba(210, 105, 30, 0.55);
          padding: .5rem 1rem;
          color: deeppink;
        }
        &:hover,
        &:active {
          background-color: lavender;
        }
      }
`