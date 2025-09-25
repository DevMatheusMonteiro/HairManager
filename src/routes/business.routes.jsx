import { Routes, Route, Navigate } from "react-router-dom";
import MyAppointments from "../pages/MyAppointments";
import { Layout } from "../components/Layout";

export default function BusinessRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout main={MyAppointments} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
