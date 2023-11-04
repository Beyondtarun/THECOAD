import React from "react";
import "./Banner.css";
import "./util.css";
import g20 from "../images/g20.jpg";
import aicte from "../images/aicte.png";
import university from "../images/univeristy.png";
import clglogo from "../images/BCIIT_LOGO_Blue.png";
import iic from "../images/iic.png";
import thecoad from "../images/THECOAD.png";

// components
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import TeamAnimated from "./TeamAnimated";
import Vision from "./Vision";
import Mentor from "./Mentor";
import Club from "../components2/Club";
import ClubLeaders from "../components2/ClubLeaders";
// this file contain all the components

function BannerTop() {
  return (
    <>
      <div class="topdiv flex bgwhite ">
        <div>
          <img className="clglogo" src={clglogo} alt="BCIIT"></img>
        </div>
        <div>
          <img className="thecoad" src={thecoad} alt="thecoad"></img>
        </div>
        <div>
          <img className="ggsipu" src={university} alt="GGSIPU"></img>
        </div>
        <div>
          <img className="headerimg" src={g20} alt="G20"></img>
        </div>
        <div>
          <img className="iic" src={iic} alt="AICTE"></img>
        </div>
        <div>
          <img className="aicte" src={aicte} alt="AICTE"></img>
        </div>
      </div>

      <div class="clgtitle flex justify-center flex-col family">
        <div class="font-bold flex justify-center items-center text-center">
          <a href="https://www.bciit.ac.in/" target="new">
            BANARSIDAS CHANDIWALA INSTITUTE OF INFORMATION TECHNOLOGY
          </a>
        </div>
        <br />
        <div class=" mar-left font-bold justify-center flex items-center text-center">
          <a href="https://www.bciit.ac.in/" target="new">
            बनारसीदास चांदीवाला सूचना प्रौद्योगिकी संस्थान
          </a>
        </div>
      </div>
    </>
  );
}
function Banner() {
  return (
    <body className="mainbody">
      {/* //banner component start// */}
      <div className="family">
        <BannerTop />

        <Navbar />

        <div className=" container flex  justify-center items-center">
          <div className="subtitle family flex-col text-center white">
            <hr />
            <span>THECOAD</span>
            <br />
            <span className="dancing tagline">
              The Home of Experts in Coading Operations Alogoritms &
              Development.
            </span>
            <hr />

            {/* <h1>COAD &#123; n log n &#125;</h1> */}

            <p className="tagline2">
              "THECOAD is the Programming society of BCIIT setup under the <br/>INSTITUTION INNOVATION COUNCIL (IIC)
              <br /> Our Aim is to foster technical knowledge among students and
              prepare them for future endeavours."
            </p>
          </div>
        </div>
      </div>
      {/* banner component ends */}

      {/* other components on main page */}
      <div id="vision">
        <Vision />
      </div>
      <div id="team">
        <Mentor />
        <TeamAnimated />
        <Club />
        <ClubLeaders />
      </div>
      <div id="ContactUs">
        <ContactUs />{" "}
      </div>

      <Footer />
    </body>
  );
}

export { BannerTop };
export default Banner;
