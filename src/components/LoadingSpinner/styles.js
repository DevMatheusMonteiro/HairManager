import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${({ theme }) => theme.colors.secondary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
