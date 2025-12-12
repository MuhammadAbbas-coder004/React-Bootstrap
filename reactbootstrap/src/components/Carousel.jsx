import React from "react";

const Carousel = () => {
  return (
    <>
      <style>
        {`
          .carousel-item img {
            width: 100%;
            height: 100vh;
            object-fit: cover;
          }

          @media (max-width: 768px) {
            .carousel-item img {
              height: 60vh;
            }
          }
        `}
      </style>

      <div id="carouselExampleIndicators" className="carousel slide">
        
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="https://i.pinimg.com/736x/7d/b9/26/7db926d5fa093f9513f9a78834411163.jpg"
              alt="slide1"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/736x/51/fa/4c/51fa4c8db29e16ef74ff055cefc042f2.jpg"
         
              alt="slide2"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/736x/ed/de/f3/eddef3436a1ed38ffcc15543885695c0.jpg"
              alt="slide3"
            />
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
