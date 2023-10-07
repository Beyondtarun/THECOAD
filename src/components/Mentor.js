import React from "react";
import "./util.css";
import "./Mentor.css";
import sushma from "../images/sushma.jpg";
import sonia from "../images/sonia.jpg";
import ravish from "../images/ravish.jpg";

const Mentor = () => {
  return (
    <div className="facultymentors">
      <div className="flex justify-center mentors">
        <h1 className="text-center family font-bold" style={{fontSize:'40px'}}>MENTORS OF THE COAD</h1>
      </div>

      <div className="flex justify-center">
        <div className="card flex justify-center">
          <div className="width1  imagediv flex justify-center items-center">
            <img className="memberimage" src={ravish} alt="member"></img>
          </div>
          <div className="width2  family">
            <sapn>
              <b>Prof (Dr.) Ravish Saggar</b>
              <br />
              Director
              <br />
              BCIIT
            </sapn>
          </div>
        </div>
        <div className=" card flex justify-center">
          <div className="width1  imagediv">
            <img className="memberimage" src={sushma} alt="member"></img>
          </div>
          <div className="width2  family">
            <sapn>
              <b>Dr.Sushma Bahuguna</b>
              <br />
              Sr.Asst.Professor
              <br />
              Department of MCA
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
              Asst.Professor
              <br />
              Department of MCA
            </sapn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
