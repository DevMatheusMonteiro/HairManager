import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routes";
import { ThemeProviderContext } from "./hooks/themeContext.jsx";
import { AuthProvider } from "./hooks/authContext.jsx";
import { AuthModalProvider } from "./hooks/authModalContext.jsx";

import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("pt-br");

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
