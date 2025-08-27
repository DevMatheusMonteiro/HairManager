import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.small};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  svg {
    font-size: 3.2rem;
  }

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;
