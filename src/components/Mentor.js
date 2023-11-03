import React from "react";
import "./util.css";
import "./Mentor.css";
import sushma from "../images/sushma.jpg";
import sonia from "../images/sonia.jpg";
import ravish from "../images/ravish.jpg";

const Mentor = () => {
  return (
    <div className="facultymentors">
      <div className="flex justify-center">
        <h1 className="text-center family font-bold" style={{fontSize:'40px'}}>MENTORS OF THECOAD</h1>
      </div>

      <div className="flex justify-center justify-around subscreen">
        <div className="card flex">
          <div className="width1  imagediv flex justify-center items-center">
            <img className="memberimage" src={ravish} alt="member"></img>
          </div>
          <div className="width2  family">
            <sapn>
              <b>Prof (Dr.) Ravish Saggar</b>
              <br />
              Head Of Institute
              <br />
              <b>BCIIT</b>
            </sapn>
          </div>
        </div>
        <div className=" card flex justify-center">
          <div className="width1  imagediv">
            <img className="memberimage" src={sushma} alt="member"></img>
          </div>
          <div className="width2  family">
            <sapn>
              <b>Dr. Sushma Bahuguna</b>
              <br />
              President
              <br />
             <b>IIC-BCIIT</b> 
            </sapn>
          </div>
        </div>
        <div className="card flex  justify-center">
          <div className="width1  imagediv flex justify-center items-center">
            <img className="memberimage" src={sonia} alt="member"></img>
          </div>
          <div className="width2  family">
            <sapn>
              <b>Ms.Sonia Batra</b>
              <br />
              In-charge Innovation & Startup
              <br />
              <b>IIC-BCIIT</b>
            </sapn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
