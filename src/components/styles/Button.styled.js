import styled from "styled-components";

export const StyledButton = styled.div`
  margin: 1rem auto;
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
`;
