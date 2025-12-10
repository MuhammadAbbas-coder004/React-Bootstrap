import React from 'react'

const Card = () => {
  return (
   <>
<div className="container">
  <div className="row g-3">

    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src="https://picsum.photos/300/200?1" className="card-img-top" />
        <div className="card-body text-center">
          <h6 className="card-title">Product 1</h6>
          <button className="btn btn-primary btn-sm">Buy</button>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src="https://picsum.photos/300/200?2" className="card-img-top" />
        <div className="card-body text-center">
          <h6 className="card-title">Product 2</h6>
          <button className="btn btn-primary btn-sm">Buy</button>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src="https://picsum.photos/300/200?3" className="card-img-top" />
        <div className="card-body text-center">
          <h6 className="card-title">Product 3</h6>
          <button className="btn btn-primary btn-sm">Buy</button>
        </div>
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src="https://picsum.photos/300/200?4" className="card-img-top" />
        <div className="card-body text-center">
          <h6 className="card-title">Product 4</h6>
          <button className="btn btn-primary btn-sm">Buy</button>
        </div>
      </div>
    </div>

  </div>
</div>



   </>
  )
}

export default Card