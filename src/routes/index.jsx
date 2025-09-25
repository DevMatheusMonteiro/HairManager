import { BrowserRouter } from "react-router-dom";

import AuthRoutes from "./auth.routes";
import BusinessRoutes from "./business.routes";
import CustomerRoutes from "./customer.routes";

import { LoadingSpinner } from "../components/LoadingSpinner";

import { useAuth } from "../hooks/authContext";

export default function Routes() {
  const { user, loading, profile } = useAuth();
  const AppRoutes = () =>
    profile?.role === "customer" ? <CustomerRoutes /> : <BusinessRoutes />;

  if (loading && !profile) return <LoadingSpinner />;
  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
}
