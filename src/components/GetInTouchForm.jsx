import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/GetInTouchForm.css";  

const GetInTouchForm = () => {
  return (
    
    <div className="main-formsection">
    
      <div className="get-in-touch-form"> 
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Get in touch with us and discover why we're one of the leading Arabic language specialists in the region.</p>

          <div className="location">
            <h3>Dubai, UAE</h3>
            <p>Unit 447<br />DMCC Business Center<br />Level No. 1<br />Jewellery & Gemplex 3<br />+971 56 50 73610<br />+971 56 50 73620</p>
          </div>

          <div className="location">
            <h3>Riyadh, KSA</h3>
            <p>Neo Center - Office #7<br />4794 Al Imam Saud Bin Faisal Rd - As Sahafah Dist.<br />+966 59 772 7170</p>
          </div>

          <div className="location">
            <h3>Amman, Jordan</h3>
            <p>Queen Rania Street,<br />Qandeel Center</p>
          </div>
        </div>

        <div className="form-section">
          <ContactForm />
        </div>

      </div>
      </div>
  

  );
};

export default GetInTouchForm;
