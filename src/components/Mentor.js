import React from "react";
import "./util.css";
import "./Mentor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import sushma from "../images/sushma.jpg";
import sonia from "../images/sonia.jpg";
import ravish from "../images/ravish.jpg";

const Mentor = () => {
  return (
    <div className="facultymentors">
      <div className="flex justify-center">
        <h1
          className="text-center family font-bold"
          style={{ fontSize: "40px" }}
        >
          MENTORS OF THECOAD
        </h1>
      </div>

      <div className="flex subcreen justify-even wrap">
        {/* <div className="subscree"> */}
        <div className="card flex item1">
          <div className="width1  imagediv">
            <img className="memberimage" src={ravish} alt="member"></img>
          </div>
          <div className="width2  family">
            <sapn>
              <b>Prof.(Dr.) Ravish Saggar</b>
              <br />
              Head Of Institute
              <br />
              <b>BCIIT</b>
              <br />
              <a href="mailto:director@bciit.ac.in" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </sapn>
          </div>
        </div>
        <div className=" card flex">
          <div className="width1  imagediv">
            <img className="memberimage" src={sushma} alt="member"></img>
          </div>
          <div className="width2  family">
            <sapn>
              <b>Dr. Sushma Bahuguna</b>
              <br />
              President
              <br />
              <b>IIC-BCIIT</b> <br />
              <a href="mailto:sushma@bciit.ac.in" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </sapn>
          </div>
        </div>
        <div className="card flex">
          <div className="width1  imagediv flex">
            <img className="memberimage" src={sonia} alt="member"></img>
          </div>
          <div className="width2  family">
            <sapn>
              <b>Ms.Sonia Batra</b>
              <br />
              In-charge Innovation & Startup
              <br />
              <b>IIC-BCIIT</b>
              <br />
              <a href="mailto:sonia@bciit.ac.in" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </sapn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
