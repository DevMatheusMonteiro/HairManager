import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        font-size: 62.5%;
    }
    body {
        font-size: clamp(1.4rem, 3vw, 1.6rem);
        font-family: ${({ theme }) => theme.fonts.primary};
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.textPrimary};;
        height: 100vh;
    }
    a {
        cursor: pointer;
        transition: color ${({ theme }) => theme.transitions.fast};;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textPrimary};
        outline: none;
        border-radius: ${({ theme }) => theme.radius.small};
    }
    a:focus {
        outline: 1px solid ${({ theme }) => theme.colors.accent};;
    }
`;
