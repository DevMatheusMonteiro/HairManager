import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  gap: 1rem;
  p {
    font-size: 1.4rem;
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
      transition: opacity ${({ theme }) => theme.transitions.fast};
    }
    a:hover {
      opacity: 0.7;
    }
  }
`;
