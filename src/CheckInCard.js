import React from "react";

export default function CheckInCard({ checkInCard }) {
  return (
    <div className="checkInCard">
      <ul>
        <li>{checkInCard.title}</li>
        <li>{checkInCard.timestart}</li>
        <li>{checkInCard.timeend}</li>
        <li>{checkInCard.airline}</li>
        <li>{checkInCard.flightnumber}</li>
        <li>{checkInCard.destination}</li>
        <li>{checkInCard.registration}</li>
        <li>{checkInCard.checkIn}</li>
      </ul>
    </div>
  );
}
