import React from "react";
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a
                  className="text-decoration-none text-body pe-3"
                  href="tel:+919212006361"
                >
                  <i className="bi bi-telephone me-2"></i>+91 92120 06361
                </a>
                <span className="text-body">|</span>
                <a
                  className="text-decoration-none text-body px-3"
                  href="mailto:kayirider.group@gmail.com"
                >
                  <i className="bi bi-envelope me-2"></i>
                  kayirider.group@gmail.com
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <a className="text-body px-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a className="text-body px-2" href="https://www.instagram.com/official_krg_riders?igsh=MWtxNXVyOG1tenJpdQ==" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-body ps-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a href="index.html" className="navbar-brand">
              <h1 className="m-0 text-uppercase text-primary">
                <img src={logo} style={{ width: "180px" }} />
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/gallery" className="nav-item nav-link">
                  Gallery
                </Link>

                <Link to="/events" className="nav-item nav-link">
                  Events
                </Link>

                <Link to="/about-us" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/team" className="nav-item nav-link">
                  Team
                </Link>
                <Link to="/contact-us" className="nav-item nav-link">
                  Contact
                </Link>
                {/* <!-- <a href="about.html" className="nav-item nav-link">Join Us</a> --> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Navbar;
