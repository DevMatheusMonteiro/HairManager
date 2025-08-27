import styled from "styled-components";

export const Container = styled.div`
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

    .container-buttons {
      display: flex;
      gap: 2rem;
      .auth-buttons {
        display: flex;
        align-items: center;
        justify-content: center;

        .button-component {
          color: ${({ theme }) => theme.colors.textPrimary};
          background: none;
          font-size: clamp(1.4rem, 3vw, 1.6rem);
          padding: 0;
          text-transform: lowercase;
          height: max-content;
        }

        .border {
          height: 20px;
          border-right: 1px solid ${({ theme }) => theme.colors.textPrimary};
          margin: 0 0.4rem;
        }
      }
    }
  }
`;
