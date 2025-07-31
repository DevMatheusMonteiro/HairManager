import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        font-size: 62.5%;
        
        --color-background: #121212;
        --color-surface: #1E1E1E;
        --color-primary: #E63946;
        --color-secondary: #00B4D8;
        --color-accent: #B0B0B0;
        --color-text-primary: #FFFFFF;
        --color-text-secondary: #CCCCCC;
        --color-border: #2C2C2C;

        --font-primary: 'Roboto', sans-serif;
        --font-secondary: 'Montserrat', sans-serif;

        --radius-small: 4px;
        --radius-medium: 8px;
        --radius-large: 16px;

        --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.4);
        --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.5);

        --transition-fast: 0.2s ease-in-out;
        --transition-normal: 0.4s ease-in-out;
    }
    body {
        font-size: 1.6rem;
        font-family: var(--font-primary);
        background-color: var(--color-background);
        color: var(--color-text-primary);
        min-height: 100vh;
    }
    a {
        cursor: pointer;
        transition: color var(--transition-fast);
        text-decoration: none;
        color: var(--color-primary);
        outline: none;
        border-radius: var(--radius-small);
    }
    a:hover {
        color: var(--color-secondary);
    }
    a:focus {
        outline: 2px solid var(--color-secondary);
    }
`;
