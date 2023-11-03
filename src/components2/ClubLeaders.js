import React from "react";
import Card from "../components/Card";
import user from "../images/image2.jpg";
import vivek from "./images/VivekPenuli.jpg";
import abhishek from "./images/AbhishekTyagi.jpg";
import dhiraj from "./images/DhirajKumarPrasad.jpg";
import hitesh from "./images/HiteshWalia.jpg";
import vikash from "../components2/images/Vikash.jpg";


function ClubLeaders(){
    const cardData = [
        {
          name: "VIVEK PENULI",
          photo: vivek,
          designation:"AppDev Lead",
          githubLink: "https://github.com/vivekpenuli",
          instagramLink:"https://www.instagram.com/vivek_penuli_/",
          linkedInLink:"",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "Abhishek Tyagi",
          photo: abhishek,
          designation:"WebDev Lead",
          githubLink:"https://github.com/ShanksCodes",
          linkedInLink:"",
          instagramLink:"",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "dhiraj kr. parsad",
          photo: dhiraj,
          designation:"WebDev Lead",
          linkedInLink:"https://www.linkedin.com/in/dhiraj-prasad-1b931526b/",
          instagramLink:"https://instagram.com/dhi_ra.j?igshid=OGQ5ZDc2ODk2ZA==",
          githubLink:"https://github.com/Dhirajkrp",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "hitesh walia",
          photo: hitesh,
          designation:"AI/ML Lead",
          githubLink:"https://github.com/Hiteshwalia4",
          linkedInLink:"https://www.linkedin.com/in/hitesh-walia-b46775234/",
          instagramLink:"",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "Arpita",
          photo: user,
          designation:"Python Lead",
          linkedInLink:"",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "Vikash",
          photo: vikash,
          designation:"DSA Lead",
          instagramLink:"",
          linkedInLink:"https://www.linkedin.com/in/vikash-5928ab278/",
          githubLink:"https://github.com/SenSiiiE",
          
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "Club leader",
          photo: user,
          designation:"c++",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        
        
        // Add more objects as needed
      ];


      return(

        <><div>
          <h1 className="dancing" style={{textAlign:"center", fontSize:"4em",marginTop:'0'}}>Club Leaders</h1>
          <Card data={cardData} />
        </div>
        
        </>
      )

}

export default ClubLeaders;