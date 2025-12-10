import React from 'react'

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.pinimg.com/736x/27/35/59/273559d18ecaa7ce046f16a1c18c9c9f.jpg"
              className="d-block w-100"
              style={{ height: "680px", 
              objectFit: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center",
               backgroundRepeat: "no-repeat" }}
              alt="slide 1"
            />
          </div>

          <div className="carousel-item">
           <img
              src="https://i.pinimg.com/1200x/1e/b4/7b/1eb47b76a0f034ce9b140e8e41a57d55.jpg"
              className="d-block w-100"
              style={{ height: "680px", 
              objectFit: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center",
               backgroundRepeat: "no-repeat" }}
              alt="slide 1"
            />
          </div>

          <div className="carousel-item">
          <img
              src="https://i.pinimg.com/1200x/be/c1/51/bec1519869202c094c7746b6e66f2a7b.jpg"
              className="d-block w-100"
              style={{ height: "680px", 
              objectFit: "cover",
              backgroundSize: "cover",
              backgroundPosition: "center",
               backgroundRepeat: "no-repeat" }}
              alt="slide 1"
            />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel
