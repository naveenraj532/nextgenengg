// src/index.js
// CHANGED: Wrapped AppRoutes with BrowserRouter and mounted it instead of App directly

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // NEW: import router
import AppRoutes from "./AppRoutes"; // NEW: use AppRoutes instead of App
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AppRoutes /> {/* NEW: Handles "/" and "/services/:slug" */}
  </BrowserRouter>
);
