import styled from "styled-components";

export const Container = styled.main`
  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  #search {
    padding: 2.4rem 2rem;
    max-width: 500px;
    margin: 0 auto;
  }

  #business {
    padding: 2.4rem 2rem;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem 4rem;
  }
`;
