import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
  width: 100%;
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

  &:has(input:focus) {
    label {
      color: ${({ theme }) => theme.colors.secondary};
    }

    .select-wrapper {
      outline: 1px solid ${({ theme }) => theme.colors.secondary};
    }
  }
  .error-message {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export const StyledSelect = styled(Select)`
  & {
    outline: ${({ $error, theme }) =>
      $error ? `1px solid  ${theme.colors.primary}` : "none"};
  }

  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  height: 4rem;
  border-radius: ${({ theme }) => theme.radius.medium};

  .select__value-container {
    color: ${({ theme }) => theme.colors.primary};
  }
  .select__single-value {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .select__placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .select__control {
    border-radius: ${({ theme }) => theme.radius.medium};
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primary};
    .select__input-container {
      font-size: clamp(1.4rem, 3vw, 1.6rem);
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }

  select__control--is-focused {
    background: red;
  }

  .select__menu {
    background-color: ${({ theme }) => theme.colors.surface};
  }
  .select__option {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .select__option--is-focused {
    background: ${({ theme }) => theme.colors.secondaryHover};
  }

  .select__option--is-selected {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
