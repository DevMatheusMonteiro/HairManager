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
    text-align: center;
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
    margin-inline: auto;
    margin-top: 2rem;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    .input-component:nth-child(1) {
      grid-column: 1 / 3;
      grid-row: 1;
      width: 70%;
    }
    .input-component:nth-child(2) {
      grid-column: 2 / 4;
      grid-row: 1;
      width: 70%;
      justify-self: end;
      align-self: center;
    }

    .input-component:nth-child(3) {
      grid-column: 1;
      grid-row: 2;
    }
    .input-component:nth-child(4) {
      grid-column: 2;
      grid-row: 2;
    }
    .input-component:nth-child(5) {
      grid-column: 3;
      grid-row: 2;
    }

    .button-component {
      grid-row: 3;
      grid-column: span 3;
    }
  }
`;
