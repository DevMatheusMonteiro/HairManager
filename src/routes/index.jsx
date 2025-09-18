import { BrowserRouter } from "react-router-dom";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { LoadingSpinner } from "../components/LoadingSpinner";

import { useAuth } from "../hooks/authContext";

export default function Routes() {
  const { user, loading } = useAuth();
  if (loading) return <LoadingSpinner />;
  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
