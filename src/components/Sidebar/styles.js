import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 99999999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: transform ${({ theme }) => theme.transitions.fast};
  transform: ${({ $open }) => ($open ? "translateX(0%)" : "translateX(-100%)")};
  .wrapper {
    height: 100%;
    width: 100%;
    max-width: 300px;
    background: ${({ theme }) => theme.colors.background};

    .header {
      display: flex;
      justify-content: space-between;
      background: ${({ theme }) => theme.colors.surface};
      padding: 1rem 2rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};

      .iconButton-component {
        color: ${({ theme }) => theme.colors.primary};
        svg {
          font-size: 2.4rem;
        }
      }
    }

    nav {
      padding: 2rem;

      ul {
        list-style: none;

        li {
          .textButton-component {
            color: ${({ theme }) => theme.colors.textPrimary};
          }
        }

        li + li {
          margin-top: 1.6rem;
        }
      }
    }
  }
`;
