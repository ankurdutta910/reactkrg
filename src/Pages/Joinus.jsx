import React, { useState } from "react";
import { db, storage } from "../Firebase";
import GoToTop from "../GoToTop";
import Swal from "sweetalert2";

const Joinus = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    bike: "",
    regno: "",
    city: "",
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

    const { fullName, email, contact, bike, regno, city } = formData;

    if (!fullName || !email || !contact || !bike || !regno) {
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
      await db.collection("newRegistrations").add({
        fullName,
        email,
        contact,
        bike,
        city,
        regno,
      });

      setLoading(false);
      Swal.fire({
        title: "Success!",
        html: "Your application has been submitted.",
        icon: "success",
      }).then(() => {
        // Reset the form after successful submission
        setFormData({
          fullName: "",
          email: "",
          contact: "",
          address: "",
          city: "",
          country: "",
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
      {/* <!-- Appointment Start --> */}
      <div className="container-fluid bg-primary py-5">
        <div className="container py-5">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">
                  Join Us
                </h5>
                <h1 className="display-4 text-white">
                  Unite, Ride, and Thrive with KRG Riders in Delhi
                </h1>
              </div>
              <p className="text-white mb-5">
                Welcome to KRG Riders, a thriving community of biking
                enthusiasts in the heart of Delhi! We are united by our love for
                the open road, the thrill of adventure, and the camaraderie that
                only riders understand. Whether you're a seasoned rider or just
                starting your journey, join us to experience unforgettable
                rides, connect with like-minded individuals, and celebrate the
                freedom of the journey. Together, let's create memories that
                last a lifetime!
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-white text-center rounded p-5">
                <h1 className="mb-4">Register Now</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Your Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <div className="contact" data-target-input="nearest">
                        <input
                          type="number"
                          className="form-control bg-light"
                          placeholder="Contact"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Your City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Your Bike"
                        name="bike"
                        value={formData.bike}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Bike Registration No"
                        name="regno"
                        value={formData.regno}
                        onChange={handleChange}
                      />
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
                          Request Joining
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
      {/* <!-- Appointment End --> */}
    </>
  );
};

export default Joinus;
