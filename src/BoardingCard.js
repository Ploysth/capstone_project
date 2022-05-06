import React from "react";
import styled from "styled-components";

export default function BoardingCard({ boardingCard }) {
  return (
    <CardSection>
      <ul>
        <TextHeader>{boardingCard.title}</TextHeader>
        <li>Uhrzeit von: {boardingCard.timestart}</li>
        <li>Uhrzeit bis: {boardingCard.timeend}</li>
        <li>Airline: {boardingCard.airline}</li>
        <li>Flugnummer: {boardingCard.flightnumber}</li>
        <li>Destination: {boardingCard.destination}</li>
        <li>Registration: {boardingCard.registration}</li>
        <li>Gate: {boardingCard.gate}</li>
      </ul>
    </CardSection>
  );
}

const CardSection = styled.section`
margin: 2em;
margin-bottom: 2em;
border: 1px solid black;
color: black;
`

const TextHeader = styled.li`
text-transform: uppercase;
margin: 10px;
`