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
    place-content: center;
    place-items: center;
    padding: 2rem 4rem;
    width: 100%;
    max-width: 500px;
    background-color: var(--color-surface);
    border-radius: var(--radius-large);

    h1 {
      text-transform: uppercase;
      font-family: var(--font-secondary);
    }
    img {
      width: 100%;
      max-width: 120px;
    }
  }
  .login-link {
    margin-top: 2rem;
    a {
      font-weight: 600;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  width: 100%;

  .button-component {
    margin-top: 2rem;
  }
`;
