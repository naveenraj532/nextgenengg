// src/AppRoutes.jsx
import { Navigate, Routes, Route } from "react-router-dom";
import App from "./components/App"; // your current homepage component
import ServicePage from "./pages/ServicePage";
import CareersPage from "./components/CareersPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
