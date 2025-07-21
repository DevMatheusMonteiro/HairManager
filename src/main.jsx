import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./styles/globalStyles.js";
import Routes from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Routes />
  </StrictMode>
);
