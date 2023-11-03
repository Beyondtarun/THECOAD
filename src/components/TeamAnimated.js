import React from "react";
import "./TeamAnimated.css"; // Import your CSS file
import tarun from "./imagesteam/1.jpg";
import avinash from "./imagesteam/avinash.jpeg";
import user from "../images/image2.jpg";
import prachi from "./imagesteam/prachi.jpg";
import ritika from "./imagesteam/Ritika.jpg";
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
    name: "Avinash Ranjan",
    role: "Chief Strategist",
    imageSrc: avinash,
    instagramLink: "https://www.instagram.com/i_avinash77/",
    linkedInLink: "https://www.linkedin.com/in/avinash-ranjan-0a58a516b/",
    githubLink: "https://github.com/avinash-25",
    // youtubeLink: '#',
  },
  {
    id: "content3",
    name: "user3",
    role: "Technical Lead",
    imageSrc: user,
    instagramLink: "#",
    linkedInLink: "#",
    githubLink: "#",
    // youtubeLink: '#',
  },
  {
    id: "content4",
    name: "Prachi sharma",
    role: "Event Lead",
    imageSrc: prachi,
    instagramLink: "https://www.instagram.com/prachiiii.sharmaa/",
    linkedInLink: "https://www.linkedin.com/in/prachisharmaps02/",
    githubLink: "https://github.com/prachisharma02",
    // youtubeLink: '#',
  },
  {
    id: "content5",
    name: "Ritika Malik",
    role: "Public Relation",
    imageSrc: ritika,
    instagramLink: "https://www.instagram.com/ritika_mallik09/",
    linkedInLink: "https://www.linkedin.com/in/ritika-mallik/",
    githubLink: "https://github.com/ritika0901",
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
