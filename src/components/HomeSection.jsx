import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeSection.css";

const HomeSection = () => {
  return (
    <section className="home-section">
      <div className="content">
        <h1>The Right Localization and Translation Company to Globalize Your Business</h1>
        <p>
          To break the language barrier and connect to your audience, you’ll
          need to partner with a localization and translation company to empower
          your path to success.
        </p>
        <p>
          At e-Arabization, intelligent software and intelligent humans come
          together to deliver the right words for less. We translate, localize,
          and create quality content that engages your customer online.
        </p>
        <p>
          Ready to Speak Your Customers' Language? Explore our language services
          in the UAE, Qatar, and Saudi Arabia.
        </p>
        <button className="quote-btn">
        <Link to="/contact">Get a Quote</Link>
        </button>
      </div>
      <div className="image">
        <img src="/assets/himg1.png" alt="Localization Logo" />
      </div>
    </section>
  );
};

export default HomeSection;
