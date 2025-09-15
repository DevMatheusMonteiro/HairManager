import { Routes, Route, Navigate } from "react-router-dom";

import Auth from "../pages/Auth";
import { Layout } from "../components/Layout";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout main={Auth} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
