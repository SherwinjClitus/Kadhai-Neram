import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Success from "./Success.jsx";
import ProtectedRoute from "./ProtectedRoute";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route
          path="/Success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
