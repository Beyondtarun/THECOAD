import React from "react";
import "./Club.css";
import CPP from "./images/CPP.png";
import AIML from "./images/AIML.png";
import java from "./images/java.png";
import web from "./images/web.png";
import python from "./images/python.png";
import android from "./images/android.png";

function Club() {
  return (
    <div className="ClubBody flex flex-col items-center">
      <span className="ClubHeading family text-center">Clubs of THECOAD</span>
      <div className="ClubLogos flex items-center justify-between">
        <span
          style={{
            fontSize: "80px",
            color: "blueviolet",
            fontWeight: "bold",
            marginLeft: "10px",
          }}
          className="roboto"
        >
          DSA
        </span>
        <img src={CPP} alt="CPP"></img>
        <img src={AIML} alt="AIML"></img>
        <img src={java} alt="JAVA"></img>
        <img src={web} alt="WEBDEV"></img>
        <img src={python} alt="python"></img>
        <img src={android} alt="Android"></img>
      </div>
    </div>
  );
}
export default Club;
