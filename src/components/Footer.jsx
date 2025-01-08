import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-5 mb-4">
                Get In Touch
              </h4>
              <p className="mb-4">
                Unite, Ride, and Thrive with KRG Riders in Delhi!
              </p>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary me-3"></i>Delhi,
                India
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary me-3"></i>
                kayirider.group@gmail.com
              </p>
              <p className="mb-0">
                <i className="fa fa-phone-alt text-primary me-3"></i>+91 92120
                06361
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-5 mb-4">
                Useful Links
              </h4>
              <div className="d-flex flex-column justify-content-start">
                {/* <Link className="text-light mb-2" to="/">
                  <i className="fa fa-angle-right me-2"></i>Home
                </Link> */}
                <Link className="text-light mb-2" to="/join-us">
                  <i className="fa fa-angle-right me-2"></i>Join Us
                </Link>

                <Link className="text-light mb-2" to="/events">
                  <i className="fa fa-angle-right me-2"></i>Events
                </Link>

                <Link className="text-light mb-2" to="/gallery">
                  <i className="fa fa-angle-right me-2"></i>Gallery
                </Link>

                <Link className="text-light" to="/team">
                  <i className="fa fa-angle-right me-2"></i>Meet the Team
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-5 mb-4">
                Quick Links
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-light mb-2" to="/">
                  <i className="fa fa-angle-right me-2"></i>Home
                </Link>
                <Link className="text-light mb-2" to="/about-us">
                  <i className="fa fa-angle-right me-2"></i>About Us
                </Link>
                <Link className="text-light mb-2" to="/contact-us">
                  <i className="fa fa-angle-right me-2"></i>Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h6 className="text-primary text-uppercase mt-4 mb-3">
                Follow Us
              </h6>
              <div className="d-flex">
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                  href="#"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                &copy;{" "}
                <a className="text-primary" href="">
                  krgriders.com
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Designed by
                <a
                  className="text-primary"
                  href="https://techrysen.com"
                  target="_blank"
                >
                  TechRysen
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
