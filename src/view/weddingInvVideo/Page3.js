import React from "react";

const Page3 = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://ospreyinvites.com/cdn/shop/files/WL-02-mockup-jpeg.jpg?v=1715164214&width=360"
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://ospreyinvites.com/cdn/shop/files/WL-03-mockup-jpeg.jpg?v=1715164315&width=360"
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://ospreyinvites.com/cdn/shop/files/WL-04-mockup-jpeg.jpg?v=1715164572&width=360"
              className="d-block w-50"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Page3;
