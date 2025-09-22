// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import CrewPage from "./components/CrewPage";
import Home from "./App";
import AboutTennis from "./components/AboutTennis";
import ContactPage from "./components/ContactPage";
import ServicesPage from "./components/ServicePage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/about-tennis" element={<AboutTennis />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
