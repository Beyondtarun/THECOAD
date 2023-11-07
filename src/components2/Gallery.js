import React from "react";
import { Link } from "react-router-dom";
import { Back } from "./Joinus";
import "./Gallery.css";
import Footer from "../components/Footer";

function Gallery() {
  return (
    <>
      <div className="jointitle family">
        <Link to="/main">
          <h1>THECOAD</h1>
        </Link>
        <h2 className="dancing" style={{ fontSize: "40px", marginTop: "5px" }}>
          Programming Socitey Of BCIIT, DELHI
        </h2>
        <Back color="transparent" />
      </div>
      {/* Back component availble in Joinus.js */}

      <div className="GalleryBody">
        <h2 className="dancing"> Gallery</h2>
        <div className="GalleryTable">
          <table>
            <th>Sr.No</th>
            <th>Date</th>
            <th>Name of Event</th>
            <th>&#128279;</th>
            {/* <th>Link</th> */}
            {GalleryData.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.date}</td>
                <td className="dancing">{item.eventname}</td>
                <td>
                  <a href={item.Link} target="_blank" rel="noreferrer">
                    Link
                  </a>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}

const GalleryData = [
  {
    date: "dd-mm-yyyy",
    eventname: "dummy",
    Link: "https://github.com/Beyondtarun",
  },
  {
    date: "dd-mm-yyyy",
    eventname: "dummy",
    Link: "dummy",
  },
  {
    date: "dd-mm-yyyy",
    eventname: "dummy",
    Link: "dummy",
  },
  {
    date: "dd-mm-yyyy",
    eventname: "dummy",
    Link: "dummy",
  },
  {
    date: "dd-mm-yyyy",
    eventname: "dummy",
    Link: "dummy",
  },
  
  // add more data
];

export default Gallery;
