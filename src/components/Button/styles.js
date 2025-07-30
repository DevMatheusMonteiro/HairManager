import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  transition: opacity var(--transition-fast);
  font-family: var(--font-secondary);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.6rem;
  height: 4.8rem;
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  font-size: 2rem;
  border: none;
  border-radius: var(--radius-small);
  outline: none;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: 2px solid var(--color-secondary);
  }
`;
