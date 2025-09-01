import styled from "styled-components";

export const Container = styled.div`
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  scale: ${({ $open }) => ($open ? 1 : 0)};
  transition: scale ${({ theme }) => theme.transitions.normal};
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "title"
    "form"
    "button";
  place-content: center;
  place-items: center;
  padding: 2rem 4rem;
  gap: 1.6rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.xl};

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
    grid-area: title;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: ${({ theme }) => theme.shadows.md};
  }
  .button {
    grid-area: button;
    text-align: center;
    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
  }
`;

export const Form = styled.form`
  grid-area: form;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  width: 100%;

  .button-component {
    max-width: 300px;
    margin: 0 auto;
    margin-top: 2rem;
  }

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    .button-component {
      grid-column: span 2;
      max-width: 300px;
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
`;
