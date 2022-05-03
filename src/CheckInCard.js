import React from "react";

export default function CheckInCard({ checkInCard }) {
  return (
    <div className="card">
      <ul className="task-card">
        <li>{checkInCard.title}</li>
        <li>Uhrzeit von: {checkInCard.timestart}</li>
        <li>Uhrzeit bis: {checkInCard.timeend}</li>
        <li>Airline: {checkInCard.airline}</li>
        <li>Flugnummer: {checkInCard.flightnumber}</li>
        <li>Destination: {checkInCard.destination}</li>
        <li>Registration: {checkInCard.registration}</li>
        <li>Check-In: {checkInCard.checkIn}</li>
      </ul>
    </div>
  );
}
