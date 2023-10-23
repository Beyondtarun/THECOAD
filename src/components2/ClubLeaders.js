import React from "react";
import Card from "../components/Card";
import user from "../images/image2.jpg";
import vivek from "./images/VivekPenuli.jpg";
import abhishek from "./images/AbhishekTyagi.jpg";
import dhiraj from "./images/DhirajKumarPrasad.jpg";
import hitesh from "./images/HiteshWalia.jpg";

function ClubLeaders(){
    const cardData = [
        {
          name: "VIVEK PENULI",
          photo: vivek,
          designation:"Java Lead",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "Abhishek Tyagi",
          photo: abhishek,
          designation:"DSA Lead",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "dhiraj kr. parsad",
          photo: dhiraj,
          designation:"WebDev Lead",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "hitesh walia",
          photo: hitesh,
          designation:"ai/ml Lead",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "Club leader",
          photo: user,
          designation:"python",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "Club leader",
          photo: user,
          designation:"android",
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