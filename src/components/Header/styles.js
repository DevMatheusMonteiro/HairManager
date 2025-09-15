import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 1.6rem 2rem;
    img {
      width: 100%;
      max-width: 60px;
    }

    .navigation {
      display: none;
    }

    .container-buttons {
      display: flex;
      gap: 2rem;
      .textButton-component {
        text-transform: lowercase;
      }
      .auth-buttons {
        display: flex;
        align-items: center;
        justify-content: center;

        .textButton-component {
          color: ${({ theme }) => theme.colors.textPrimary};
        }

        .border {
          height: 20px;
          border-right: 1px solid ${({ theme }) => theme.colors.textPrimary};
          margin: 0 0.4rem;
        }
      }
    }

    @media (min-width: 700px) {
      .navigation {
        display: block;
      }
    }
  }
`;
