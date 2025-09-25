import styled from "styled-components";

export const Container = styled.main`
  padding: 2rem;
  .select-component {
    max-width: 1000px;
    margin: 0 auto;
  }
  #appointments-list {
    width: 100%;
    max-width: 1000px;
    margin-inline: auto;
    margin-top: 2.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    .card {
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.radius.medium};
      box-shadow: ${({ theme }) => theme.shadows.md};
      background: ${({ theme }) => theme.colors.surface};
      width: 100%;
      max-width: 300px;

      .container-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        #confirm {
          color: #13d30cff;
        }
        #cancel {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
