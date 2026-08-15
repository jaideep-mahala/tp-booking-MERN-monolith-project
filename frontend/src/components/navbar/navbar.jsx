import React from "react";
import "./navbar.css";
import logo from "../../pages/Home/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand">
          <img src={logo} alt="RailVista Logo" className="brand-logo" />
          <span className="brand-name">RailVista</span>
        </Link>

        <nav className="nav-links">
          <a href="#trains">Trains</a>
          <a href="#pnr">PNR Status</a>
          <a href="#live">Live Status</a>
          <a href="#schedule">Schedule</a>
          <a href="#offers">Offers</a>
          <a href="#help">Help</a>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-ghost" onClick={() => navigate("/login")}>Sign in</button>
          <button className="btn btn-primary">Book Ticket</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
