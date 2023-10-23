import React from "react";
import "./TeamAnimated.css"; // Import your CSS file
import tarun from "./imagesteam/1.jpg";
import avinash from "../components2/images/AvinashRanjan.jpg";
import vikash from "../components2/images/Vikash.jpg";
import user from "../images/image2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

class TeamAnimated extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeContent: "content1",
    };
  }

  handleMouseOver = (id) => {
    this.setState({ activeContent: id });
  };

  render() {
    return (
      <div className="team">
        <h1 className="teamTitle dancing white">Coordinators of THECOAD</h1>
        <div className="containerteam">
          <div className="icon">
            {teamData.map((member, index) => (
              <div
                className={`imgBx ${
                  this.state.activeContent === member.id ? "active" : ""
                }`}
                style={{ "--i": index + 1}}
                data-id={member.id}
                key={member.id}
                onMouseOver={() => this.handleMouseOver(member.id)}
              >
                <img src={member.imageSrc} alt="" />
              </div>
            ))}
          </div>
          <div className="contentteam">
            {teamData.map((member) => (
              <div
                className={`contentBx ${
                  this.state.activeContent === member.id ? "active" : ""
                }`}
                id={member.id}
                key={member.id}
              >
                <div className="cardteam">
                  <div className="imgBx">
                    <img src={member.imageSrc} alt="" />
                  </div>
                  <div className="textBx family">
                    <h2>
                      {member.name}
                      <br />
                      <span>{member.role}</span>
                    </h2>
                    <ul className="sci">
                      <li>
                        <a
                          href={member.instagramLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>
                      <li>
                        <a
                          href={member.linkedInLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a
                          href={member.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const teamData = [
  {
    id: "content1",
    name: "Tarun Goyal",
    role: "Software Dev",
    imageSrc: tarun,
    instagramLink: "https://www.instagram.com/beyondtarun/",
    linkedInLink: "https://www.linkedin.com/in/beyondtarun/",

    githubLink: "https://github.com/Beyondtarun",
  
  },
  {
    id: "content2",
    name: "Avinash",
    role: "Chief Strategist",
    imageSrc: avinash,
    instagramLink: "#",
    linkedInLink: "#",
    githubLink: "#",
    // youtubeLink: '#',
  },
  {
    id: "content3",
    name: "vikash",
    role: "Technical Lead",
    imageSrc: vikash,
    instagramLink: "#",
    linkedInLink: "#",
    githubLink: "#",
    // youtubeLink: '#',
  },
  {
    id: "content4",
    name: "Member3",
    role: "Event Lead",
    imageSrc: user,
    instagramLink: "#",
    linkedInLink: "#",
    githubLink: "#",
    // youtubeLink: '#',
  },
  {
    id: "content5",
    name: "Member3",
    role: "Public Relation",
    imageSrc: user,
    instagramLink: "#",
    linkedInLink: "#",
    githubLink: "#",
    // youtubeLink: '#',
  },
  {
    id: "content6",
    name: "Member3",
    role: "Treasurer",
    imageSrc: user,
    instagramLink: "#",
    linkedInLink: "#",
    githubLink: "#",
    // youtubeLink: '#',
  },

  // Add more team members here
];

export default TeamAnimated;
