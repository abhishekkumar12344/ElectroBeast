import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo clickable */}
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </Link>
        <h2> ELECTRO BEAST</h2>
      </div>

      {/* Desktop Navbar */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
       <Link to="/Service">Service </Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/battery">Battery</Link>
        <Link to="/Products">Products </Link>
        <Link to="/contact">Contact</Link>
         
      </nav>

      {/* Hamburger Button (Mobile) */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
