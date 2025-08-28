import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import { Layout } from "../components/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout main={Home} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
