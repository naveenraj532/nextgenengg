// src/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import App from "./components/App"; // your current homepage component
import ServicePage from "./pages/ServicePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services/:slug" element={<ServicePage />} />
      {/* optionally add a catch-all 404 route */}
    </Routes>
  );
}
