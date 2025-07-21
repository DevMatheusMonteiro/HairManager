import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  .input-wrapper {
    display: flex;
    align-items: center;
    background-color: var(--color-text-secondary);
    width: 100%;
    height: 4rem;
    border-radius: var(--radius-small);
    padding: 0 1.2rem;
    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;
    }
  }
`;
