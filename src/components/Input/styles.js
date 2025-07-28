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
  }
  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: var(--color-text-secondary);
    width: 100%;
    height: 4rem;
    border-radius: var(--radius-small);
    padding: 0 1.2rem;
    svg {
      color: var(--color-surface);
      font-size: 2rem;
    }
    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 1.4rem;
    }
  }
`;
