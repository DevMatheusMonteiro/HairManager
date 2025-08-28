import styled from "styled-components";
import banner from "../../assets/barber-shop.jpeg";

export const Container = styled.main`
  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
  .dialog {
    position: fixed;
    inset: 0;
    z-index: 9999;
    /* background: ${({ theme }) => theme.colors.background}; */
    background: red;
  }
  #hero {
    height: 500px;
    background-image: url(${banner});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    position: relative;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    .hero-wrapper {
      padding: 2.4rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .container-title {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 600px;
        align-items: center;
        position: relative;
        z-index: 1;
        h1 {
          color: ${({ theme }) => theme.colors.primary};
          font-size: 3.2rem;
        }
        h2 {
          margin-top: 2.4rem;
          font-size: 2.4rem;
          color: ${({ theme }) => theme.colors.secondary};
        }
      }

      .container-buttons {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        .button-component {
          font-size: 1.4rem;
          max-width: 200px;
        }
      }
    }

    &::before {
      z-index: 1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) =>
        theme.title == "light"
          ? `${theme.colors.accent}`
          : `${theme.colors.background}`};
      opacity: 0.8;
    }
  }

  #about {
    padding: 2.4rem 2rem;
    h2 {
      text-align: center;
      margin-bottom: 2.4rem;
    }
    .wrapper-about {
      padding: 2.4rem 2rem;
      background: ${({ theme }) => theme.colors.surface};
      border-radius: ${({ theme }) => theme.radius.large};
      box-shadow: ${({ theme }) => theme.shadows.xl};
      border: 1px solid ${({ theme }) => theme.colors.border};
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2.4rem;
      max-width: 1000px;
      margin: 0 auto;
      > div {
        h3 {
          margin-bottom: 2.4rem;
        }
        ul {
          list-style: none;

          li {
            display: flex;
            align-items: center;
            gap: 1rem;
            span:nth-child(1) {
              border: 1px solid ${({ theme }) => theme.colors.border};
              display: flex;
              justify-content: center;
              align-items: center;
              max-width: max-content;
              padding: 1rem;
              border-radius: 50%;
              svg {
                font-size: 2.4rem;
              }
            }
          }

          li + li {
            margin-top: 2.4rem;
            position: relative;
            &::before {
              content: "";
              position: absolute;
              border: 1px solid ${({ theme }) => theme.colors.border};
              height: 24px;
              top: -25px;
              left: 22px;
            }
          }
        }
      }
    }
  }

  #benefits {
    padding: 0 2rem 2.4rem 2rem;
    h2 {
      text-align: center;
      margin-bottom: 2.4rem;
    }
    .benefits-wrapper {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      h3 {
        margin-bottom: 2.4rem;
      }
      > div {
        padding: 1rem 2rem;
        background: ${({ theme }) => theme.colors.surface};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: ${({ theme }) => theme.radius.medium};
        box-shadow: ${({ theme }) => theme.shadows.md};

        ul {
          list-style: none;

          li {
            background: ${({ theme }) => theme.colors.background};
            padding: 2rem 0.8rem;
            border: 1px solid ${({ theme }) => theme.colors.primary};
            border-radius: ${({ theme }) => theme.radius.large};
            transition: box-shadow ${({ theme }) => theme.transitions.normal};
            font-weight: bold;
            letter-spacing: 1px;
            &:hover {
              box-shadow: ${({ theme }) => theme.shadows.xl};
            }
          }

          li + li {
            margin-top: 2.4rem;
          }
        }
      }
    }
  }

  #cta {
    padding: 0 2rem 2.4rem 2rem;
    .cta-wrapper {
      padding: 2rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.radius.large};
      box-shadow: ${({ theme }) => theme.shadows.xl};
      max-width: 700px;
      margin: 0 auto;
      background: ${({ theme }) => theme.colors.surface};

      h2 {
        text-align: center;
        margin-bottom: 2.4rem;
      }

      .container-buttons {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;

        .button-component {
          font-size: 1.4rem;
          max-width: 200px;
        }
      }
    }
  }
`;
