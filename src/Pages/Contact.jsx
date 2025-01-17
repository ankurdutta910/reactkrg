import React, { useState } from "react";
import { db } from "../Firebase";
import GoToTop from "../GoToTop";
import Swal from "sweetalert2";
import { serverTimestamp } from "firebase/firestore";
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    msg: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { fullName, email, subject, msg } = formData;

    if (!fullName || !email || !subject || !msg) {
      setLoading(false);
      Swal.fire({
        title: "Error!",
        html: "Please fill in all required fields.",
        icon: "error",
      });
      return;
    }

    try {
      // Save the data to Firestore
      await db.collection("inqueries").add({
        fullName,
        email,
        subject,
        msg,
        postedon: serverTimestamp(),
        status: "pending"
      });

      setLoading(false);
      Swal.fire({
        title: "Success!",
        html: "Thank you for contacting us. Our team will contact you soon!",
        icon: "success",
      }).then(() => {
        // Reset the form after successful submission
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          msg: "",
        });
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Error!",
        html: "Something went wrong, please try again.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <GoToTop />
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Any Questions?
            </h5>
            <h1 className="display-4">Please Feel Free To Contact Us</h1>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: "200px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: "100px",
                    height: "70px",
                    transform: "rotate(-15deg)",
                  }}
                >
                  <i
                    className="fa fa-2x fa-location-arrow text-white"
                    style={{ transform: "rotate(15deg)" }}
                  ></i>
                </div>
                <h6 className="mb-0">Delhi, India</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: "200px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: "100px",
                    height: "70px",
                    transform: "rotate(-15deg)",
                  }}
                >
                  <i
                    className="fa fa-2x fa-phone text-white"
                    style={{ transform: "rotate(15deg)" }}
                  ></i>
                </div>
                <h6 className="mb-0">
                  <a href="tel:+919212006361">+91 9212006361</a>
                </h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: "200px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: "100px",
                    height: "70px",
                    transform: "rotate(-15deg)",
                  }}
                >
                  <i
                    className="fa fa-2x fa-envelope-open text-white"
                    style={{ transform: "rotate(15deg)" }}
                  ></i>
                </div>
                <h6 className="mb-0">
                  <a href="mailto:kayirider.group@gmail.com">
                    kayirider.group@gmail.com
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ height: "500px" }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52633258584!2d76.76357436215979!3d28.64368462633545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1736013515307!5m2!1sen!2sin"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center position-relative"
            style={{ marginTop: "-200px", zIndex: "1" }}
          >
            <div className="col-lg-8">
              <div className="bg-white rounded p-4 m-3 mb-0">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control bg-light border-0"
                        style={{ height: "100px" }}
                        placeholder="Message"
                        name="msg"
                        value={formData.msg}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      {loading ? (
                        <button className="btn btn-primary w-100 py-3" disabled>
                          Please wait...
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Send Message
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
