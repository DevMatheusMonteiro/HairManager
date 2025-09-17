import styled from "styled-components";
import banner from "../../assets/barber-shop.jpeg";

export const Container = styled.main`
  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  #search {
    padding: 2.4rem 2rem;
  }
`;
