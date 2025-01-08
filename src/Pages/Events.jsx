import React from "react";
import GoToTop from "../GoToTop";
const Events = () => {
  return (
    <>
      <GoToTop />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Kayi Riders Group
            </h5>
            <h1 className="display-5">Events</h1>
          </div>
          <div className="row g-5">
            {/* <div className="col-md-3">
                 <div className="bg-light rounded overflow-hidden">
                   <img className="img-fluid w-100" src={Sameer} alt="" />
                   <div className="p-3 text-center">
                     <a className="h3 d-block mb-3" href="">
                       Rider
                     </a>
                     <a className="p">@riderofdelhi_kayi</a>
                   </div>
                 </div>
               </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
