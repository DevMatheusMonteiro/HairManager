import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import { GlobalStyles } from "../styles/globalStyles";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProviderContext({ children }) {
  const [theme, setTheme] = useState(darkTheme);

  function toggleTheme() {
    setTheme((prev) => (prev.title == "dark" ? lightTheme : darkTheme));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
