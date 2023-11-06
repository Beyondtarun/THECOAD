import React from "react";
import { Link } from "react-router-dom";
import { Back } from "./Joinus";
import "./Events.css";
import Footer from "../components/Footer";
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import con from "./images/conversation.png";

function Events() {
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

      <div className="EventBody">
        <h2 className="dancing">Events</h2>
        <div>
          <span className="dancing">Coming soon....</span>
          {/* <EventPage /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

// const eventsData = [
//   {
//     name: 'Event 1',
//     details: 'Details of Event 1',
//     imageUrl: con,
//   },
//   {
//     name: 'Event 2',
//     details: 'Details of Event 2',
//     imageUrl: 'event2.jpg',
//   },
//   // Add more event objects as needed
// ];

// const EventPage = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="event-page">
//       <Slider {...settings}>
//         {eventsData.map((event, index) => (
//           <div key={index} className="event-card">
//             <h2>{event.name}</h2>
//             <p>{event.details}</p>
//             <img src={event.imageUrl} alt={`Event ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
// export {EventPage};
export default Events;
