import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &:has(input:focus) {
    label {
      color: var(--color-secondary);
    }
    .input-wrapper {
      outline: 2px solid var(--color-secondary);
    }
    .input-wrapper svg {
      color: var(--color-secondary);
    }
  }
  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: var(--color-background);
    width: 100%;
    height: 4.8rem;
    border-radius: var(--radius-small);
    padding: 0 1.2rem;
    svg {
      color: var(--color-text-primary);
      font-size: 2rem;
    }
    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 1.6rem;
      font-family: var(--font-secondary);
      color: var(--color-text-primary);
    }
  }
`;
