import React, { useState } from "react";
import "../styles/ContactForm.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    currentLanguage: "",
    targetLanguages: [],
    documentType: "",
    wordCount: "",
    attachment: null,
    hearAboutUs: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // Success message state

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      if (name === "termsAccepted") {
        setFormData({ ...formData, [name]: checked });
      } else {
        setFormData({
          ...formData,
          targetLanguages: checked
            ? [...formData.targetLanguages, value]
            : formData.targetLanguages.filter((lang) => lang !== value),
            
        });
      }
    } else if (type === "file") {
      setFormData({ ...formData, attachment: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const validateStep = () => {
    const newErrors = {};
  
    if (step === 1) {
      if (!formData.fullName || formData.fullName.trim().split(" ").length < 2) {
        newErrors.fullName = "Full Name must contain at least two words.";
      }
  
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!formData.email || !emailPattern.test(formData.email)) {
        newErrors.email = "Enter a valid professional email.";
      }
  
      const phonePattern = /^\+\d{1,3}-\d{6,14}$/;
      if (!formData.phone || !phonePattern.test(formData.phone)) {
        newErrors.phone = "Phone Number must be in the format +CountryCode-Number.";
      }
  
      if (!formData.companyName) newErrors.companyName = "Company Name is required.";
    }
  
    if (step === 2) {
      if (!formData.currentLanguage) newErrors.currentLanguage = "Current Language is required.";
      if (formData.targetLanguages.length === 0) newErrors.targetLanguages = "Select at least one Target Language.";
      if (!formData.documentType) newErrors.documentType = "Document Type is required.";
      if (!formData.attachment) newErrors.attachment = "Please upload a document.";
    }
  
    if (step === 3) {
      if (!formData.hearAboutUs) newErrors.hearAboutUs = "Please select how you heard about us.";
      if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions.";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };
  
  
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success message
    setSubmissionSuccess(true);

     // Reset form and step after 3 seconds
     setTimeout(() => {
      setStep(1);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        currentLanguage: "",
        targetLanguages: [],
        documentType: "",
        wordCount: "",
        attachment: null,
        hearAboutUs: "",
        termsAccepted: false,
      });
      setSubmissionSuccess(false);
    }, 2000);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Contact Us</h2>

        {submissionSuccess && <p className="success-message">Form submitted successfully!</p>}

        <div className="form-fields">
          <div className="progress-indicator">
            {["Personal", "Translation", "Spam Prevention", "Review"].map((label, index) => (
              <div key={index} className="progress-wrapper">
                <div className="progress-wrapper-Text">
                  <div className={`step-item ${step >= index + 1 ? "active" : ""}`}>{index + 1}</div>
                  <div className="step-label">{label}</div>
                </div>
                {index < 3 && (
                  <div className={`progress-line ${step > index + 1 ? "completed" : "pending"}`}></div>
                )}
              </div>
            ))}
          </div>

          {step === 1 && (
              <>
      
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className={errors.fullName ? "error" : ""} />
                {errors.fullName && <span className="error-msg">{errors.fullName}</span>}

                <input type="email" name="email" placeholder="Professional Email" value={formData.email} onChange={handleChange} className={errors.email ? "error" : ""} />
                {errors.email && <span className="error-msg">{errors.email}</span>}

                <input type="tel" name="phone" placeholder="Phone Number (e.g., +1-1234567890)" value={formData.phone} onChange={handleChange} className={errors.phone ? "error" : ""} />
                {errors.phone && <span className="error-msg">{errors.phone}</span>}

                <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className={errors.companyName ? "error" : ""} />
                {errors.companyName && <span className="error-msg">{errors.companyName}</span>}
              </>
            )}

{step === 2 && (
              <>
               
                <select name="currentLanguage" value={formData.currentLanguage} onChange={handleChange} className={errors.currentLanguage ? "error" : ""}>
                  <option value="">Current Language</option>
                  <option value="English">English</option>
                  <option value="Arabic">Arabic</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                </select>
                {errors.currentLanguage && <span className="error-msg">{errors.currentLanguage}</span>}

                <label>Target Languages:</label>
                <div className="checkbox-group">
                  {['English', 'Arabic', 'French', 'Spanish'].map((lang) => (
                    <label key={lang}>
                      <input type="checkbox" name="targetLanguages" value={lang} checked={formData.targetLanguages.includes(lang)} onChange={handleChange} />
                      {lang}
                    </label>
                  ))}
                </div>
                {errors.targetLanguages && <span className="error-msg">{errors.targetLanguages}</span>}

                <select name="documentType" value={formData.documentType} onChange={handleChange} className={errors.documentType ? "error" : ""}>
                  <option value="">Document Type</option>
                  <option value="Legal">Legal</option>
                  <option value="Medical">Medical</option>
                  <option value="Technical">Technical</option>
                  <option value="Marketing">Marketing</option>
                </select>
                {errors.documentType && <span className="error-msg">{errors.documentType}</span>}

                <input type="number" name="wordCount" placeholder="Approximate Word Count (Optional)" value={formData.wordCount} onChange={handleChange} />

                <input type="file" name="attachment" onChange={handleChange} accept=".pdf, .docx" className={errors.attachment ? "error" : ""} />
                {errors.attachment && <span className="error-msg">{errors.attachment}</span>}
              </>
            )}


{step === 3 && (
             <>

               <label>How did you hear about us?</label>
              <select
                   name="hearAboutUs"
                   value={formData.hearAboutUs}
                   onChange={handleChange}
                   className={errors.hearAboutUs ? "error" : ""}
              >
              <option value="">Select an option</option>
              <option value="Google ads">Google Ads</option>
              <option value="Twitter">Twitter</option>
              <option value="Linkedin">LinkedIn</option>
              <option value="TV">TV</option>
              <option value="Radio">Radio</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
           </select>
               {errors.hearAboutUs && <span className="error-msg">{errors.hearAboutUs}</span>}

               <div className="terms-container">
                <input
                   type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
           />
              <label>
              I accept the <a href="#">Terms & Conditions</a>
              </label>
            </div>
              {errors.termsAccepted && <span className="error-msg">{errors.termsAccepted}</span>}
           </>
      )}


          
            {step === 4 && (
              <>

                <p><strong>Full Name:</strong> {formData.fullName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>

                <p><strong>Company Name:</strong> {formData.companyName }</p>
                <p><strong>Current Language:</strong> {formData.currentLanguage}</p>
                <p><strong>Target Languages:</strong> {formData.targetLanguages}</p>
                <p><strong>Document Type:</strong> {formData.documentType}</p>
                <p><strong>Word Count:</strong> {formData.wordCount }</p>
                <p><strong>How did you hear about us?</strong> {formData.hearAboutUs}</p>

               {formData.attachment ? (
                <p><strong>Attachment:</strong> {formData.attachment.name}</p>
               ) : (
                <p><strong>Attachment:</strong> Not uploaded</p>
              )}
              </>
            )}


          <div className="form-navigation">
            {step > 1 && <button className="back-btn" onClick={prevStep}>Previous Step</button>}
            {step < 4 && <button className="next-btn" onClick={nextStep}>Next Step</button>}
            {step === 4 && <button className="submit-btn" onClick={handleSubmit}>Submit</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
