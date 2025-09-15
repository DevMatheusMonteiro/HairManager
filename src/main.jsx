import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routes";
import { ThemeProviderContext } from "./hooks/themeContext.jsx";
import { AuthProvider } from "./hooks/authContext.jsx";
import { AuthModalProvider } from "./hooks/authModalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProviderContext>
        <AuthModalProvider>
          <Routes />
        </AuthModalProvider>
      </ThemeProviderContext>
    </AuthProvider>
  </StrictMode>
);
