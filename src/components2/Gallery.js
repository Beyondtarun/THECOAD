import React from "react";
import { Link } from "react-router-dom";
import { Back } from "./Joinus";
import "./Gallery.css";
import Footer from "../components/Footer";

function Gallery() {
  return (
    <>
      <div className="FaqBanner roboto">
        <Link to="/main">
          <h1>THECOAD</h1>
        </Link>
        <h2 className="dancing" style={{ fontSize: "40px", marginTop: "5px" }}>
          Programming Socitey Of BCIIT, DELHI
        </h2>

        <h2
          className="dancing"
          style={{ color: "InactiveCaption", fontWeight: "bolder" }}
        >
          {" "}
          Gallery
        </h2>
      </div>
      {/* Back component availble in Joinus.js */}
      <Back />
      <div className="GalleryBody">
        <div>
            <span className="dancing">Coming soon....</span>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Gallery;
