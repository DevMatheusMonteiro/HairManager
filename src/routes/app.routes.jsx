import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import BusinessDetail from "../pages/BusinessDetail";
import { Layout } from "../components/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout main={Home} />} />
      <Route
        path="/business-detail/:id"
        element={<Layout main={BusinessDetail} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
