import "./util.css";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex-col footer-screen bg-black1 white family">
      <div className=" flex justify-even family white height1">
        <div className="flex items-center">
          <span className="smokewhite">
            THE COAD is programming society of BCIIT Delhi established in Autumn of
            2023.
            <br /> COAD motivate developers for:{" "}
            <ul>
              <li>Clean Coading</li>
              <li>Object Oriented Programming</li>
              <li>Alogrithms</li>
              <li>Data Structures</li>
            </ul>{" "}
            <p style={{color:"#0E9700"}}>*Images used above are for representational purpose we claim no copyright.</p>
          </span>
        </div>
        <div>
          Useful Links{" "}
          <ul>
            <li>
              <a
                href="https://www.bciit.ac.in/bca.php"
                target="_blank"
                rel="noreferrer"
              >
                BCA
              </a>
            </li>
            <br />
            <li>
              <a
                Href="https://www.bciit.ac.in/mca.php"
                target="_blank"
                rel="noreferrer"
              >
                MCA
              </a>
            </li>
            <br/>
            <li>
              <Link to="/main">Main Website</Link>
            </li>
            <br />
            <li>
              <a
                Href="https://innovation-club-website.framer.ai/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Innovation Cell
              </a>
            </li>
            <br />
            <li>
              <a
                Href="https://www.bciit.ac.in/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                BCIIT Website
              </a>
            </li>
           
          </ul>
        </div>

        <div>
          Stay Connected:
          <br />
          <br />
          <a href="mailto:tarunanandgoyal@gmail.com" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="tel:+91-11-49020144"
            target="_blank"
            style={{ marginLeft: "15px" }}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faPhone} />
            +91-11-49020144
          </a>
          <br />
          <br />
          <a href="https://www.bciit.ac.in/" target="_blank" className="discord" rel="noreferrer">
            <FontAwesomeIcon icon={faDiscord} /> Join on Discord
          </a>
        </div>
      </div>

      <hr style={{ color: "white" }} />
      <div className="flex">
        <div className="flex justify-center items-center width ">
          <h3 className="flex justify-center items-center foot1">
            &copy; COADING CLUB 2023 | BCIIT, DELHI
          </h3>
        </div>
        <div className="flex justify-center items-center width">
          <h3 className="foot">
            Design & Developed with<span className="heart"> &#10084;</span> by{" "}
            <a
              href="https://www.linkedin.com/in/beyondtarun/"
              target="_blank"
              className="tarun"
              rel="noreferrer"
            >
              Tarun.
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Footer;
