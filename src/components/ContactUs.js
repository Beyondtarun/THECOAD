import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="contact-us-page">
      <div className="flex family">
        <h1 style={{marginLeft:'15px'}}>Any Questions?</h1>

        <h1
          className="contactus family"
          onClick={toggleForm}
          style={{ cursor: "pointer" }}
        >
          Click Me
        </h1>
      </div>

      {showForm && (
        <div className="google-form-embed ">
          <iframe
            title="contactpage"
            className="form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd7iezxvK2S_oaUncmDoHszNWoF0wpD5yIWDsE-qzZkJbTKuw/viewform?embedded=true"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
