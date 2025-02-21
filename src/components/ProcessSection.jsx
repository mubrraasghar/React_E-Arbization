import React from "react";
import "../styles/ProcessSection.css";

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-image">
          <img src="/assets/our-process.png" alt="Process Illustration" />
        </div>
        <div className="process-content">
          <h2 className="process-title">Our Process</h2>
          <p className="process-description">
            With a process-driven, consultative approach to language solutions, 
            our translation and localization company successfully translates, localizes, 
            and creates content in Arabic dialects that represent the GCC and the Levant.
          </p>
          <p className="process-description">
            Our custom approach is designed to achieve the best English-to-Arabic translation 
            for each and every business we support. That’s why e-Arabization is one of the leading 
            language solution specialists in the region.
          </p>
          <h3 className="process-subtitle">We support Your Industry</h3>
          <p className="process-description">
            Let us take care of your content, so you can take care of your business. 
            Check out our subject matter expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
