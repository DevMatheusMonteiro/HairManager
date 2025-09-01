import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routes";
import { ThemeProviderContext } from "./hooks/themeContext.jsx";
import { AuthProvider } from "./hooks/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProviderContext>
        <Routes />
      </ThemeProviderContext>
    </AuthProvider>
  </StrictMode>
);
