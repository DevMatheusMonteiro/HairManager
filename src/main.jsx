import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routes";
import { ThemeProviderContext } from "./hooks/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderContext>
      <Routes />
    </ThemeProviderContext>
  </StrictMode>
);
