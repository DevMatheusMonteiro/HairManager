// src/styles/themes.js

export const darkTheme = {
  title: "dark",
  colors: {
    background: "#121212",
    backgroundWeakOpacity: "#1212128e",
    surface: "#1E1E1E",
    primary: "#E63946",
    primaryHover: "#e63947b2",
    secondary: "#00B4D8",
    accent: "#B0B0B0",
    textPrimary: "#FFFFFF",
    textSecondary: "#CCCCCC",
    border: "#2C2C2C",
  },
  fonts: {
    primary: "'Roboto', sans-serif",
    secondary: "'Montserrat', sans-serif",
  },
  radius: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  shadows: {
    xs: "0px 1px 2px rgba(255,255,255,0.05)",
    sm: "0px 1px 3px rgba(255,255,255,0.08), 0px 1px 2px rgba(255,255,255,0.04)",
    md: "0px 2px 6px rgba(255,255,255,0.10), 0px 1px 4px rgba(255,255,255,0.06)",
    lg: "0px 4px 10px rgba(255,255,255,0.12), 0px 2px 6px rgba(255,255,255,0.08)",
    xl: "0px 8px 16px rgba(255,255,255,0.14), 0px 4px 12px rgba(255,255,255,0.10)",
  },
  transitions: {
    fast: "0.2s ease-in-out",
    normal: "0.4s ease-in-out",
  },
};

export const lightTheme = {
  title: "light",
  colors: {
    background: "#FFFFFF",
    backgroundWeakOpacity: "#ffffff33",
    surface: "#F5F5F5",
    primary: "#E63946",
    primaryHover: "#e63947b2",
    secondary: "#00B4D8",
    accent: "#4A4A4A",
    textPrimary: "#121212",
    textSecondary: "#555555",
    border: "#DDDDDD",
  },
  fonts: {
    primary: "'Roboto', sans-serif",
    secondary: "'Montserrat', sans-serif",
  },
  radius: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
  shadows: {
    xs: "0px 1px 2px rgba(0,0,0,0.12)",
    sm: "0px 1px 3px rgba(0,0,0,0.16), 0px 1px 2px rgba(0,0,0,0.24)",
    md: "0px 2px 6px rgba(0,0,0,0.18), 0px 1px 4px rgba(0,0,0,0.24)",
    lg: "0px 4px 10px rgba(0,0,0,0.20), 0px 2px 6px rgba(0,0,0,0.24)",
    xl: "0px 8px 16px rgba(0,0,0,0.22), 0px 4px 12px rgba(0,0,0,0.28)",
  },
  transitions: {
    fast: "0.2s ease-in-out",
    normal: "0.4s ease-in-out",
  },
};
