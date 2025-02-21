import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/assets/logo.jpg" alt="e-Arabization" />
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Translation Services</a></li>
              <li><a href="#">Localization Services</a></li>
              <li><a href="#">Machine Translation</a></li>
              <li><a href="#">Subtitling Services</a></li>
              <li><a href="#">Copywriting Services</a></li>
              <li><a href="#">Content Services</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Industry Expertise</h4>
            <ul>
              <li><a href="#">E-commerce</a></li>
              <li><a href="#">Hospitality & Leisure</a></li>
              <li><a href="#">Media & Entertainment</a></li>
              <li><a href="#">Digital Technology</a></li>
              <li><a href="#">Business & Finance</a></li>
              <li><a href="#">Education</a></li>
            </ul>
          </div>

          <div className="footer-column1">
            <h4>Our Languages</h4>
            <ul>
              <li><a href="#">The Translation Forum</a></li>
              <li><a href="#">Join Our Team</a></li>
              <li><a href="#">Get in Touch</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2020 e-Arabization</p>
        <div className="social-icons">
          <a href="#">
            <img src="/assets/footer_icons/youtube.svg" alt="YouTube" className="footer-icon" />
          </a>
          <a href="#">
            <img src="/assets/footer_icons/linkedin.svg" alt="LinkedIn" className="footer-icon" />
          </a>
          <a href="#">
            <img src="/assets/footer_icons/twitter.svg" alt="Twitter" className="footer-icon" />
          </a>
          <a href="#">
            <img src="/assets/footer_icons/facebook.svg" alt="Facebook" className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
