import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // adjust path if needed
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // get auth state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Logo clickable */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </Link>
        <h2>ELECTRO BEAST</h2>
      </div>

      {/* Navbar */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/service" onClick={closeMenu}>Service</Link>
        <Link to="/vehicles" onClick={closeMenu}>Vehicles</Link>
        <Link to="/battery" onClick={closeMenu}>Battery</Link>
        <Link to="/products" onClick={closeMenu}>Products</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        {/* Conditional Rendering Based on Auth */}
        {user ? (
          <>
            <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" onClick={closeMenu}>Login</Link>
        )}
      </nav>

      {/* Hamburger Button (Mobile) */}
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
