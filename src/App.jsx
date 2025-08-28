import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service";
import Vehicles from "./pages/Vehicles.jsx";
import Battery from "./pages/Battery.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products";
import WhatsAppButton from "./components/WhatsAppButton";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Service" element={<Service  />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/battery" element={<Battery />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            
        </Routes>
        <WhatsAppButton />
        
      </main>
      <Footer />
    </>
  );
}
