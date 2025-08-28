import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  .form-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "form"
      "link";
    place-content: center;
    place-items: center;
    padding: 2rem 4rem;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radius.large};
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.xl};
    h1 {
      font-size: clamp(3.2rem, 5vw, 4.8rem);
      grid-area: title;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.fonts.secondary};
    }
    img {
      grid-area: logo;
      width: 100%;
      height: 100%;
      aspect-ratio: 1/1;
      max-width: 150px;
    }
    .link {
      grid-area: link;
      text-align: center;
      margin-top: 2.4rem;
      a {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
      }
    }

    @media (min-width: 700px) {
      /* grid-template-columns: 1fr;
      grid-template-areas:
        "title"
        "form"
        "link link";
      row-gap: 2.4rem; */
      /* max-width: 1000px; */
      /* .link {
        margin-top: 0;
      } */
    }
  }
`;

export const Form = styled.form`
  grid-area: form;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  width: 100%;
  /* max-width: 500px; */

  .button-component {
    margin-top: 2rem;
  }
`;
