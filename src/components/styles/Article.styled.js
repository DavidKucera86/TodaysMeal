import styled from "styled-components";

export const StyledArticle = styled.article`
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

`