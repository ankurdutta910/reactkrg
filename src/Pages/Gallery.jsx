import React from "react";
import img1 from "../Assets/img/5.jpg";
import img2 from "../Assets/img/14.jpg";
import img3 from "../Assets/img/1.jpg";
import img4 from "../Assets/img/10.jpg";
import img5 from "../Assets/img/11.jpg";
import img6 from "../Assets/img/9.jpg";
import img7 from "../Assets/img/2.jpg";
import img8 from "../Assets/img/3.jpg";
import img9 from "../Assets/img/4.jpg";
import img10 from "../Assets/img/6.jpg";
import img11 from "../Assets/img/7.jpg";
import img12 from "../Assets/img/8.jpg";
import img13 from "../Assets/img/12.jpg";
import img14 from "../Assets/img/13.jpg";
import GoToTop from "../GoToTop";

const Gallery = () => {
  const imageData = [
    { id: 1, src: img1, alt: "krg riders kayi rider group" },
    { id: 2, src: img2, alt: "krg riders kayi rider group" },
    { id: 3, src: img3, alt: "krg riders kayi rider group" },
    { id: 4, src: img4, alt: "krg riders kayi rider group" },
    { id: 5, src: img5, alt: "krg riders kayi rider group" },
    { id: 6, src: img6, alt: "krg riders kayi rider group" },
    { id: 7, src: img7, alt: "krg riders kayi rider group" },
    { id: 8, src: img8, alt: "krg riders kayi rider group" },
    { id: 9, src: img9, alt: "krg riders kayi rider group" },
    { id: 10, src: img10, alt: "krg riders kayi rider group" },
    { id: 11, src: img11, alt: "krg riders kayi rider group" },
    { id: 12, src: img12, alt: "krg riders kayi rider group" },
    { id: 13, src: img13, alt: "krg riders kayi rider group" },
    { id: 14, src: img14, alt: "krg riders kayi rider group" },
  ];
  return (
    <>
      <GoToTop />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
