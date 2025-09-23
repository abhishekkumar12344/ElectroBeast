import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import AOS from "aos";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="logo">MyApp</div>

      {/* Hamburger */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li className={location.pathname === "/login" ? "active" : ""}>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </li>
        <li className={location.pathname === "/register" ? "active" : ""}>
          <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
        </li>
        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
