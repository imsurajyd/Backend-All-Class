// ==========================================
// React Application Entry Point
// ==========================================
//
// This is the main entry point of the
// React application.
//
// Responsibilities:
// - Import global styles.
// - Render the root App component.
// - Enable React Strict Mode during development.
//

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
