import React from 'react';

export default function BoardingCard({ boardingCard }) {
  return (
    <>
    <div className="card">
      <ul className="task-card">
        <li>{boardingCard.title}</li>
        <li>Uhrzeit von: {boardingCard.timestart}</li>
        <li>Uhrzeit bis: {boardingCard.timeend}</li>
        <li>Airline: {boardingCard.airline}</li>
        <li>Flugnummer: {boardingCard.flightnumber}</li>
        <li>Destination: {boardingCard.destination}</li>
        <li>Registration: {boardingCard.registration}</li>
        <li>Gate: {boardingCard.gate}</li>
      </ul>
    </div>
    </>
  )
}
