import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi"; // Import the icon
import "../styles/ServicesSection.css";

const services = [
  {
    title: "Professional Translation",
    description:
      "We are one of the only language service providers in the region with a team of dedicated in-house Arabic translation professionals. We provide on-demand, excellent quality Arabic translation to leading organizations with essential requirements.",
  },
  {
    title: "Localization",
    description:
      "We adapt and reword brand messaging to meet the cultural needs of regional or local customers. The Arabic language has upwards of 30 dialects. Trust our linguists to connect to your customers with nuanced content that respects and understands the Arab world.",
  },
  {
    title: "Machine Translation",
    description:
      "Translate volume at speed. Using the latest advances in the industry, we combine machine translation with in-house editing expertise, to provide a custom solution focused on delivering fast, cost-efficient translation for primarily technical and data-driven content.",
  },
  {
    title: "Subtitling Services",
    description:
      "The rise in streaming video services and video marketing has turned audiovisual translation into a vital digital marketing tool for global organizations. Following the subtitling industry-standard; we time code, transcribe and screen video content across any format.",
  },
  {
    title: "Copywriting",
    description:
      "Get your readers to take action! We develop powerful content to promote, persuade, and influence your audience into productively engaging with your brand. The best copywriting is copywriting that turns a potential customer into a paying customer. That’s where we come in.",
  },
  {
    title: "Content Creation",
    description:
      "Content marketing is essential to a successful global business. Developing educational, informative and entertaining content is a strategic investment that guarantees a long-term return. We specialize in the research and creation of SEO-friendly content for the Arab market.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="section-underline"></div>
      <p className="section-subtitle">
        We are more than just a translation company; we offer all the necessary
        language services to help businesses grow, including:
      </p>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <button className="cta-button">
      <Link to="/contact">Get a quote, today.</Link>
       <span className="cta-icon">→</span>
      </button>
    </section>
  );
};

export default ServicesSection;
