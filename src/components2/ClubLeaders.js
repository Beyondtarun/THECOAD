import React from "react";
import Card from "../components/Card";
import user from "../images/image2.jpg";

function ClubLeaders(){
    const cardData = [
        {
          name: "Club leader 1",
          photo: user,
          designation:"Java Lead",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "Club leader 2",
          photo: user,
          designation:"DSA Lead",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, purus ut cursus sagittis, odio odio consequat ipsum."
        },
        {
          name: "Club leader 3",
          photo: user,
          designation:"WebDev Lead",
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