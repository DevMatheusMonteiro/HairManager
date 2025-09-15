import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label[data-sronly="true"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    margin: 0;
  }

  &:has(textarea:focus) {
    label {
      color: ${({ theme }) => theme.colors.secondary};
    }

    .textarea-wrapper {
      outline: 1px solid ${({ theme }) => theme.colors.secondary};
    }
    .textarea-wrapper svg {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .textarea-wrapper {
    /* display: flex;
    align-items: center; */
    /* gap: 0.8rem; */
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.radius.medium};
    svg {
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 2rem;
    }
    textarea {
      padding: 1.2rem;
      resize: none;
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
