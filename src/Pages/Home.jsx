import React from "react";
import Joinus from "./Joinus";
import aboutImg from "../Assets/img/about.JPG";
import Sameer from "../Assets/img/sameer.jpg";
import Kishore from "../Assets/img/kishore.jpg";
import Faizan from "../Assets/img/faizan.jpg";
import Hemant from "../Assets/img/hemant.jpg";
import Nitin from "../Assets/img/about.JPG";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../Assets/img/5.jpg";
import img2 from "../Assets/img/14.jpg";
import img3 from "../Assets/img/1.jpg";
import img4 from "../Assets/img/10.jpg";
import img5 from "../Assets/img/11.jpg";
import img6 from "../Assets/img/9.jpg";
import UpcomingEvents from "./UpcomingEvents";

const Home = () => {
  const navigate = useNavigate();
  const imageData = [
    { id: 1, src: img1, alt: "Image 1" },
    { id: 2, src: img2, alt: "Image 2" },
    { id: 3, src: img3, alt: "Image 3" },
    { id: 4, src: img4, alt: "Image 4" },
    { id: 5, src: img5, alt: "Image 5" },
    { id: 6, src: img6, alt: "Image 6" },
  ];

  return (
    <>
      {/* <!-- Hero Start --> */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start mt-5">
            <div className="col-lg-8 text-center text-lg-start mt-3">
              {/* <!-- <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style="border-color: rgba(256, 256, 256, .3) !important;">KAYI RIDERS GROUP</h5> --> */}
              <h1 className="display-2 text-white mb-md-4">
                Riders united, we conquer roads and create lasting memories
                together
              </h1>
              <div className="pt-2">
                <Link
                  to="/join-us"
                  className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
                >
                  Join Us
                </Link>
                <Link
                  to="/about-us"
                  className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
                >
                  Explore more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}

      {/* <!-- About Start --> */}
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
      {/* <!-- About End --> */}

      {/* <!-- Gallery Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            {imageData.map((image) => (
              <div key={image.id} className="col-xl-4 col-lg-6">
                <div className="bg-light rounded overflow-hidden">
                  <img
                    className="img-fluid w-100"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
            <div className="col-12 text-center">
              <button
                onClick={() => navigate("/gallery")}
                className="btn btn-primary py-3 px-5"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>

 

      <div className="mb-3 mt-2">
        <Joinus />
      </div>

           {/* <!-- Upcoming Events End --> */}
           <UpcomingEvents />

      {/* <!-- Admins Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Kayi Riders Group
            </h5>
            <h1 className="display-5">Group Admins</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="bg-light rounded overflow-hidden">
                <img className="img-fluid w-100" src={Sameer} alt="" />
                <div className="p-3 text-center">
                  <a className="h3 d-block mb-3" href="">
                    Rider Sameer
                  </a>
                  <a className="p">@riderofdelhi_kayi</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-light rounded overflow-hidden">
                <img className="img-fluid w-100" src={Faizan} alt="" />
                <div className="p-3 text-center">
                  <a className="h3 d-block mb-3" href="">
                    Rider Faizan
                  </a>
                  <a className="p">@motorrider_faizu</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-light rounded overflow-hidden">
                <img className="img-fluid w-100" src={Kishore} alt="" />
                <div className="p-3 text-center">
                  <a className="h3 d-block mb-3" href="">
                    Rider Kishore
                  </a>
                  <a className="p">@kishoruttrakhandi</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bg-light rounded overflow-hidden">
                <img className="img-fluid w-100" src={Hemant} alt="" />
                <div className="p-3 text-center">
                  <a className="h3 d-block mb-3" href="">
                    Rider Hemant
                  </a>
                  <a className="p">@traveling2explorelife</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Admin End --> */}
    </>
  );
};

export default Home;
