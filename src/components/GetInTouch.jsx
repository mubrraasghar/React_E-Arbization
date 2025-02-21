import React from "react";
import { Link } from "react-router-dom";
import "../styles/GetInTouch.css";

const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <div className="overlay"></div> {/* Dark overlay */}
      <div className="get-in-touch-content">
        <h2>Get in Touch</h2>
        <p>
          Get in touch with us and discover why we're one of the leading Arabic
          language specialists in the region. Arabize your business today!
        </p>
        
        <Link to="/contact" className="cta-button">
           Get a quote, today. →
        </Link>
      </div>
    </section>
  );
};

export default GetInTouch;
