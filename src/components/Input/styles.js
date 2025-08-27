import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &:has(input:focus) {
    label {
      color: ${({ theme }) => theme.colors.secondary};
    }
    .input-wrapper {
      outline: 1px solid ${({ theme }) => theme.colors.secondary};
    }
    .input-wrapper svg {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%;
    height: 4rem;
    border-radius: ${({ theme }) => theme.radius.medium};
    padding: 0 1.2rem;
    svg {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 2rem;
    }
    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: clamp(1.4rem, 3vw, 1.6rem);
      font-family: ${({ theme }) => theme.fonts.secondary};
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;
