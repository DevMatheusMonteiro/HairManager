import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.fast};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.6rem;
  height: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) =>
    theme.title === "light"
      ? `${theme.colors.background}`
      : `${theme.colors.textPrimary}`};
  font-size: 2rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.medium};
  outline: none;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;
