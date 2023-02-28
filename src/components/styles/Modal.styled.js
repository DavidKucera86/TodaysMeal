import styled from "styled-components";

export const StyledModal = styled.section`
  color: ${({ notificationColor }) => notificationColor};
  font-size: 2rem;
  margin: 1rem 0;
  padding: 0.5rem;
  border: 0.25rem solid ${({ notificationColor }) => notificationColor};
`;
