import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./app.routes";
import { AuthModalProvider } from "../hooks/authModalContext";

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthModalProvider>
        <AppRoutes />
      </AuthModalProvider>
    </BrowserRouter>
  );
}
