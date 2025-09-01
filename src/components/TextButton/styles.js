import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: clamp(1.4rem, 3vw, 1.6rem);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  transition: color ${({ theme }) => theme.transitions.fast};
  text-align: center;
  border-radius: ${({ theme }) => theme.radius.small};
  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;
