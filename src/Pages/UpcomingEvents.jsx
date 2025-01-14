import React from "react";
import GoToTop from "../GoToTop";
import event1 from "../Assets/img/event1.jpg";
import mainevent from "../Assets/img/mainevent.jpg";
import { Link } from "react-router-dom";
const UpcomingEvents = () => {
  return (
    <>
      <GoToTop />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Kayi Rider Group
            </h5>
            <h1 className="display-5">Upcoming Events</h1>
          </div>
          <div className="row g-4 events_container">
            <div className="col-md-3">
              <div className="bg-light rounded overflow-hidden">
                <img className="img-fluid w-100" src={event1} alt="" />
                <div className="p-3 text-center">
                  <a className="h4 d-block mb-2">Republic Day Ride</a>

                  <a className="h6 d-block">26th January 2025</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-light rounded overflow-hidden">
                <img className="img-fluid w-100" src={mainevent} alt="" />
                <div className="p-3 text-center">
                  <a className="h5 d-block mb-2">
                    India to World Car & Bike Mania
                  </a>

                  <a className="h6 d-block">14th-16th February 2025</a>

                  <a
                    className="btn btn-primary h4"
                    href="https://biker.highwaydelite.com/event/91"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
