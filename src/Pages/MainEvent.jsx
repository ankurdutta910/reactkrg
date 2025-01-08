import React from "react";
import GoToTop from "../GoToTop";
import { Link } from "react-router-dom";

const MainEvent = () => {
  return (
    <>
      <GoToTop />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Tribute To Martyr's
            </h5>
            <h1 className="display-5">India to World Car & Bike Mania</h1>
          </div>
          <p style={{color:'red'}}>The form is currently inactive.</p>
          <div className="row g-4 events_container">
            <div className="col-md-4">
              <label class="form-label mb-0">Full Name</label>
              <input className="form-control" placeholder="Enter Full Name" />
            </div>

            <div className="col-md-4">
              <label class="form-label mb-0">Email Address</label>
              <input
                className="form-control"
                placeholder="Enter Email Address"
              />
            </div>

            <div className="col-md-4">
              <label class="form-label mb-0">Contact Number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Contact Number"
              />
            </div>

            <div className="col-md-4">
              <label class="form-label mb-0">Number of Days</label>
              <select className="form-control">
                <option value="1">Day 1</option>
                <option value="2">Day 1 & Day 2</option>
                <option value="3">Combo Pack</option>
              </select>
            </div>

            <div className="col-md-4">
              <label class="form-label mb-0">Amount to be Paid</label>
              <input
                type="number"
                className="form-control"
                placeholder="2499"
              />
            </div>

            <div>
              <button className="btn btn-primary h4">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainEvent;
