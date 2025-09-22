import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  .wrapper {
    max-width: 1000px;
    margin: 0 auto;

    .textButton-component {
      margin-bottom: 2.4rem;
    }

    p + p {
      margin-top: 1rem;
    }
    form {
      margin-top: 2.4rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .service-professional {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @media (min-width: 425px) {
          flex-direction: row;
        }
      }

      .datetime {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .datetime-component {
          /* max-width: 700px; */
        }

        @media (min-width: 425px) {
          flex-direction: row;
          .time-component {
            max-width: 180px;
          }
        }
      }
    }
  }
`;
