import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Vehicles from "./pages/Vehicles.jsx";
import Battery from "./pages/Battery.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx"; // 🔑 import
import VehicleDetails from "./pages/VehicleDetails";
import OrderPage from "./pages/OrderPage.jsx" 

import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/battery" element={<Battery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/vehicle/:id" element={<VehicleDetails />} />
           <Route path="/order" element={<OrderPage />} /> 

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Default + 404 */}
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <WhatsAppButton />
      </main>
      <Footer />
    </>
  );
}
