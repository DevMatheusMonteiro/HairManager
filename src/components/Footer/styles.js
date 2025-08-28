import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  gap: 1.6rem;
  p {
    font-weight: bold;
  }

  .social-media {
    font-size: 2.4rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
