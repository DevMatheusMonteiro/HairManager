import { BrowserRouter } from "react-router-dom";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
