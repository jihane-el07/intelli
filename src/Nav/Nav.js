import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid" style={{ paddingInlineStart: "8px" }}>
        <Link className="navbar-brand" to="/">
          <img src="pics/logoo.png" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{paddingInlineStart:"50px"}}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/listing">Listing Ads</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: "#F8E8DA", width: "max-content", fontSize: "22px" }} to="/signup">Sign up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="b11" style={{ color: "#F8E8DA", width: "80%", fontSize: "22px" }} to="/post-ad">Post Ads</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
