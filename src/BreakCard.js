import React from "react";
import styled from "styled-components";

export default function BreakCard({ breakCard }) {
  return (
    <CardSection>
      <ul>
        <TextHeader>{breakCard.title}</TextHeader>
        <li>Uhrzeit von: {breakCard.timestart}</li>
        <li>Uhrzeit bis: {breakCard.timeend}</li>
      </ul>
    </CardSection>
  );
}

const CardSection = styled.section`
  margin: 2em;
  margin-bottom: 2em;
  border: 1px solid black;
  color: black;
`;

const TextHeader = styled.li`
  text-transform: uppercase;
  margin: 10px;
`;
