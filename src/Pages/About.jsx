import React from "react";
import aboutImg from "../Assets/img/about.JPG";
import GoToTop from "../GoToTop";
import Joinus from "./Joinus";
const About = () => {
  return (
    <>
      <GoToTop />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "500px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={aboutImg}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mb-4">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                  About Us
                </h5>
                <h1 className="display-7">
                  Welcome to KRG Riders, a passionate community of biking
                  enthusiasts based in the vibrant city of Delhi.
                </h1>
              </div>
              <p>
                Our group is dedicated to bringing together individuals who
                share a love for riding, adventure, and camaraderie.
                <br />
                <br />
                At KRG Riders, we believe that every ride is an opportunity to
                explore new places, experience the thrill of the open road, and
                build lasting friendships. Our members come from diverse
                backgrounds, but we are united by our shared passion for
                motorcycles and the freedom they bring.
                <br />
                <br />
                We organize regular rides, ranging from short city cruises to
                long-distance journeys, ensuring there’s something for everyone.
                Safety is our top priority, and we promote responsible riding
                practices to ensure that every ride is enjoyable and secure for
                all participants.
                <br />
                <br />
                Whether you’re a seasoned rider or just starting out, KRG Riders
                welcomes you to join our community. Together, we conquer roads,
                create unforgettable memories, and celebrate the spirit of
                riding.
                <br />
                <br />
                Join us on our next adventure and become a part of the KRG
                Riders family!
              </p>
              {/* <!-- <div className="row g-3 pt-3">
                  <div className="col-sm-3 col-6">
                    <div className="bg-light text-center rounded-circle py-4">
                      <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                      <h6 className="mb-0">
                        Qualified<small className="d-block text-primary">Doctors</small>
                      </h6>
                    </div>
                  </div>
                  <div className="col-sm-3 col-6">
                    <div className="bg-light text-center rounded-circle py-4">
                      <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                      <h6 className="mb-0">
                        Emergency<small className="d-block text-primary"
                          >Services</small
                        >
                      </h6>
                    </div>
                  </div>
                  <div className="col-sm-3 col-6">
                    <div className="bg-light text-center rounded-circle py-4">
                      <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                      <h6 className="mb-0">
                        Accurate<small className="d-block text-primary">Testing</small>
                      </h6>
                    </div>
                  </div>
                  <div className="col-sm-3 col-6">
                    <div className="bg-light text-center rounded-circle py-4">
                      <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                      <h6 className="mb-0">
                        Free<small className="d-block text-primary">Ambulance</small>
                      </h6>
                    </div>
                  </div>
                </div> --> */}
            </div>
          </div>
        </div>
      </div>

      <Joinus/>
    </>
  );
};

export default About;
