import React from "react";
import "./Vision.css";
import cleancoading from "../images/cleancoding.jpg";
import digital from "../images/digital.jpg";
import oops from "../images/oops.webp";
import data from "../images/data.webp";
function Vision() {
  return (
    <div className="visionBody flex justify-center">
      <div className="visionContainer flex flex-col justify-center items-center">
        <div className="subContainer text-center dancing">
          <span style={{ fontSize: "28px", color: "#d4637e" }}>
            <b>OUR VISION</b>
          </span>
          <br />
          <br />
          <br />
          <span style={{ fontSize: "30px", color: "yellow" }}>
            <b>सर्वेषु कार्येषु कौशलम्</b>
          </span>
          <br />
          <span style={{ color: "white", fontSize: "20px" }}>
            <i>"Skill in all action"</i>
          </span>
        </div>

        <div className="subContainer flex items-center">
          <div className="width1 imagdiv">
            <img
              className="visionImage1"
              src={cleancoading}
              alt="clean coading"
            ></img>
          </div>
          <div className="width2 roboto">
            <p>
              <h2 style={{ color: "#03ffff" }}>Clean Coding</h2>
              We envision a community where every member embraces the principles
              of readability, modularity, and efficiency in their code. Through
              mentorship, workshops, and collaborative projects, we aim to
              empower our members with the skills and mindset needed to write
              code that is not just functional but elegant. We aspire to be a
              hub of innovation and best practices in software development,
              where clean code is not just a goal but a way of life.
            </p>
          </div>
        </div>
        <div className="subContainer flex item-center">
          <div className="width2 roboto">
            <p>
              <h2 style={{ color: "#03ffff" }}>
                Driving Digital transformation
              </h2>
              To lead the digital transformation by equipping our members with
              cutting-edge web development skills. Our coding club aims to be a
              catalyst for technological innovation in the digital space. Key
              Objectives: Stay at the forefront of web development trends and
              emerging technologies. Collaborate with local businesses and
              organizations to create impactful web solutions. Foster an
              environment of continuous learning and experimentation.
            </p>
          </div>

          <div className="width1 imagdiv">
            {" "}
            <img
              className="visionImage2"
              src={digital}
              alt="clean coading"
            ></img>
          </div>
        </div>

        <div className="subContainer flex items-center">
          <div className="width1 imagdiv">
            <img
              className="visionImage1"
              src={oops}
              alt="clean coading"
            ></img>
          </div>
          <div className="width2 roboto">
            
              <h2 style={{ color: "#03ffff" }}>Object Oriented programming</h2><p>
              "To pioneer a programming paradigm where software development is
              an art of modeling the real world, fostering modularity,
              encapsulation, and reusability. We envision an OOP landscape that
              empowers developers to craft elegant, scalable, and maintainable
              solutions, creating a foundation for innovation, collaboration,
              and sustainable software ecosystems."
            </p>
          </div>
        </div>
        <div className="subContainer flex item-center">
          <div className="width2 roboto">
            <p>
              <h2 style={{ color: "#03ffff" }}>
                Data Structures & Algorithms
              </h2>
              Empowering innovation through essential Data Structures and Algorithms expertise.<br>
              </br> From Arrays to Red-Black Tree optimizing Time & Space complexities.
            </p>
          </div>

          <div className="width1 imagdiv">
            {" "}
            <img
              className="visionImage2"
              src={data}
              alt="clean coading"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Vision;
