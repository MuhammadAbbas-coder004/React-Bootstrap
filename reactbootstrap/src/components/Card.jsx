import React from "react";

const Card= ({img, description ,category,price}) => {

  
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." style={{height: "20rem"}}  />
      <div className="card-body">
        <h5 className="card-title">{description}</h5>
        <h6 className="card-text">
         {category}
        </h6>
        <h6 className="card-text">
         {price}
        </h6>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Card
