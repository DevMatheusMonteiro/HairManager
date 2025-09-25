import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import BusinessDetail from "../pages/BusinessDetail";
import { Layout } from "../components/Layout";
import MyAppointments from "../pages/MyAppointments";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout main={Home} />} />
      <Route
        path="/business-detail/:id"
        element={<Layout main={BusinessDetail} />}
      />
      <Route
        path="/my-appointments"
        element={<Layout main={MyAppointments} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
