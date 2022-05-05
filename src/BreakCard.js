import React from 'react'
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
  )
}

const CardSection = styled.section`
background-color: #fffff;
border: 1px solid black;
width: 341px;
`

const TextHeader = styled.li`
text-transform: uppercase;
`