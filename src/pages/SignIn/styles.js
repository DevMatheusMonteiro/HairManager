import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  .form-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "logo"
      "form"
      "register-link";
    place-content: center;
    place-items: center;
    padding: 2rem 4rem;
    width: 100%;
    max-width: 500px;
    background-color: var(--color-surface);
    border-radius: var(--radius-large);

    h1 {
      font-size: clamp(3.2rem, 5vw, 4.8rem);
      grid-area: title;
      text-transform: uppercase;
      font-family: var(--font-secondary);
    }
    img {
      grid-area: logo;
      width: 100%;
      max-width: 150px;
    }
    .register-link {
      grid-area: register-link;
      margin-top: 2.4rem;
      a {
        font-weight: 600;
      }
    }

    @media (min-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "title title"
        "logo form"
        "register-link register-link";
      row-gap: 3.2rem;
      max-width: 1000px;
      img {
        max-width: 300px;
      }
      .register-link {
        margin-top: 0;
      }
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
    margin-top: 2rem;
  }
`;
