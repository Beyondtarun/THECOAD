import React, { useState } from "react";
import "./Faq.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Back } from "./Joinus";
import faqicon from "./images/conversation.png";
import ContactUs from "../components/ContactUs";

const FaqBanner = () => {
  return (
    <>
      <div className="FaqBanner roboto">
        <Link to="/main">
          <h1>THECOAD</h1>
        </Link>
        <h2 className="dancing" style={{ fontSize: "40px", marginTop: "5px" }}>
          Programming Socitey Of BCIIT, DELHI
        </h2>

        <h2 className="dancing"> FAQs</h2>
      </div>
      {/* Back component availble in Joinus.js */}
      <Back />
    </>
  );
};

const faqData = [
  {
    question: "1. What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "2. Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "3. Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  // Add more FAQ items as needed
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqMain">
      <div className="Faqbody">
        <img className="faqicon" src={faqicon} alt="FAQ"></img>
        <div className="faq">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div
                className={`question ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
              </div>
              {openIndex === index && (
                <div className="answer roboto">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

function FaqPage() {
  return (
    <>
      <FaqBanner />
      <Faq />
      <Footer />
    </>
  );
}

export { FaqBanner, Faq, FaqPage };
