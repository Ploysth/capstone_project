import React from "react";
import styled from "styled-components";


export default function CheckInCard({ checkInCard }) {
  return (
    <CardSection>
      <ul className="task-card">
        <TextHeader>{checkInCard.title}</TextHeader>
        <li>Uhrzeit von: {checkInCard.timestart}</li>
        <li>Uhrzeit bis: {checkInCard.timeend}</li>
        <li>Airline: {checkInCard.airline}</li>
        <li>Flugnummer: {checkInCard.flightnumber}</li>
        <li>Destination: {checkInCard.destination}</li>
        <li>Registration: {checkInCard.registration}</li>
        <li>Check-In: {checkInCard.checkIn}</li>
      </ul>
    </CardSection>
  );
}

const CardSection = styled.section`
background-color: #fffff;
border: 1px solid black;
width: 341px;
`

const TextHeader = styled.li`
text-transform: uppercase;
`