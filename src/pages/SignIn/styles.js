import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .form-container {
    margin-top: 8rem;
    padding: 2rem;
    width: 100%;
    max-width: 500px;
    background-color: var(--color-surface);
    border-radius: var(--radius-large);

    .title-logo {
      h1 {
        text-transform: uppercase;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        max-width: 100px;
      }
    }
  }
`;

export const Form = styled.form``;
