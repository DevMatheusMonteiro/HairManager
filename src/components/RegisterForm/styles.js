import styled from "styled-components";

export const Container = styled.div`
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  scale: ${({ $open }) => ($open ? 1 : 0)};
  transition: scale ${({ theme }) => theme.transitions.normal};
  position: relative;
  inset: 0;
  padding: 4rem;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.surface};
  .iconButton-component {
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${({ theme }) => theme.colors.primary};
    svg {
      font-size: 2rem;
    }
  }

  h2 {
    text-transform: uppercase;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: ${({ theme }) => theme.shadows.md};
  }

  .button {
    text-align: center;
    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
  }

  @media (min-width: 1000px) {
    max-width: 700px;
    margin: 0 auto;
    height: auto;
    border-radius: ${({ theme }) => theme.radius.large};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  margin-block: 1.6rem;

  .personalInfo-group {
    display: grid;
    gap: 1.6rem;
  }

  .address-group {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;

    .district-city-state {
      gap: 1.6rem;
      display: grid;
    }
  }

  .password-group {
    display: grid;
    gap: 1.6rem;
  }

  .button-component {
    max-width: 300px;
    margin-inline: auto;
    margin-top: 2rem;
  }

  @media (min-width: 400px) {
    .personalInfo-group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;
      .textarea-component {
        grid-column: span 2;
      }
    }

    .address-group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;

      .district-city-state {
        grid-column: span 2;
        gap: 1.6rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .password-group {
      grid-template-columns: repeat(2, 1fr);
      /* align-items: flex-start; */
    }

    .button-component {
      grid-column: span 3;
    }
  }
`;
