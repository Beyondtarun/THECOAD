import React from "react";
import './Card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Card({data}){
    return (
      
        <div className="Card-container">
          {data.map((item, index) => (
            <div className="Card family" key={index}>
              <img src={item.photo} alt={item.name} className="card-photo" />
              <div className="card-content flex flex-col justify-between">
                <h2 className="card-name">{item.name}</h2>
                <h3 className="card-designation">{item.designation}</h3>
                {/* <p className="card-details">{item.details}</p> */}
                <ul className="sci flex justify-center">
                      <li>
                        <a
                          href={item.instagramLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>
                      <li>
                        <a
                          href={item.linkedInLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a
                          href={item.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
              </div>
            </div>
          ))}
      
        </div>);
}

export default Card;

