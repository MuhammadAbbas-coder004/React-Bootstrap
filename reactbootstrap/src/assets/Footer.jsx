import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row">

   
          <div className="col-12 col-md-3 mb-4">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

      
          <div className="col-12 col-md-3 mb-4">
            <h5 className="mb-3">Help & Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shipping</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-light text-decoration-none">Order Tracking</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h5 className="mb-3">Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Mobiles</a></li>
              <li><a href="#" className="text-light text-decoration-none">Electronics</a></li>
              <li><a href="#" className="text-light text-decoration-none">Fashion</a></li>
              <li><a href="#" className="text-light text-decoration-none">Grocery</a></li>
            </ul>
          </div>

         
          <div className="col-12 col-md-3 mb-4">
            <h5 className="mb-3">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Facebook</a></li>
              <li><a href="#" className="text-light text-decoration-none">Instagram</a></li>
              <li><a href="#" className="text-light text-decoration-none">Twitter</a></li>
              <li><a href="#" className="text-light text-decoration-none">YouTube</a></li>
            </ul>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
