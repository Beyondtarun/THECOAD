import React from "react";
import { useState } from "react";

import "./Joinus.css";
import Footer from "../components/Footer";
import "../components/util.css";
import { Link } from "react-router-dom";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import symbol from "./images/symbol.png";
import { Faq } from "./Faq";
import Club from "./Club";
function Back(props) {
  return (
    <div className="joinback" style={{background:props.color}}>
      <Link to="/main">
        <p>
          <FontAwesomeIcon
            icon={faBackward}
            className="joinhome"
          ></FontAwesomeIcon>
        </p>
      </Link>
    </div>
  );
}

function Joinus() {
  const [showFaq, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showFaq);
  };

  return (
    <>
      <div className="jointitle family">
        <Link to="/main">
          <h1>THECOAD</h1>
        </Link>
        <h2 className="dancing">Programming Socitey Of BCIIT, DELHI</h2>
      </div>
      <Back />

      <div className="joinus_body">
        {/* <div className="Clubs border">cnocj</div> */}
        <Club />
        <div className="joincontainer">
          <div className="joinsub">
            <h1> Join Us</h1>

            <img className="arrowSymbol" src={symbol} alt="arrow"></img>
            <p>
              Hi developer, join COAD to enhance your skills and get a
              un-matched experience. <h2>Welcome to Our Coding Club!</h2> Are
              you passionate about coding and eager to learn, collaborate, and
              innovate with like-minded individuals? Look no further! Our Coding
              Club is a vibrant community of programmers, developers, and tech
              enthusiasts dedicated to honing their coding skills and exploring
              the exciting world of technology.
              <br />
              <br />
              <br />
              You will get a whatsapp group join link after form submission. Pls
              click on it and join our group to stay update.
            </p>
          </div>
          <div className="joinsub">
            <div className="google-form-embed  joinfrom">
              <iframe
                title="joinpage"
                src="https://docs.google.com/forms/d/e/1FAIpQLSd7iezxvK2S_oaUncmDoHszNWoF0wpD5yIWDsE-qzZkJbTKuw/viewform?embedded=true"
                frameborder="0"
                marginheight="12"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="joinfaqsection flex family">
          <h1>FAQ's</h1>

          <h1
            className="JoinFaq family"
            onClick={toggleForm}
            style={{ cursor: "pointer" }}
          >
            Click Me
          </h1>
        </div>

        {showFaq && <Faq />}
      </div>

      <Footer />
    </>
  );
}
export { Back };
export default Joinus;
