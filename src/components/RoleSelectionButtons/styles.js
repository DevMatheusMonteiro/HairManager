import styled from "styled-components";

export const Container = styled.div`
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  scale: ${({ $open }) => ($open ? 1 : 0)};
  transition: scale ${({ theme }) => theme.transitions.normal};
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
  gap: 1.6rem;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.xl};

  .iconButton-component {
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${({ theme }) => theme.colors.primary};
    svg {
      font-size: 2rem;
    }
  }

  .button-component {
    font-size: clamp(1.4rem, 3vw, 1.6rem);
  }

  @media (min-width: 400px) {
    flex-direction: row;
  }
`;
