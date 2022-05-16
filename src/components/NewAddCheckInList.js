import React from "react";
import styled from "styled-components";

const NewAddCheckInList = (props) => {
  return (
    <>
      {props.newCheckInList.map((addCheckInList) => (
        <Card>
          <h1>Check In</h1>
          <ul>
            <li key={addCheckInList.id}>{addCheckInList.timestart}</li>
            <li key={addCheckInList.id}>{addCheckInList.timeend}</li>
            <li key={addCheckInList.id}>{addCheckInList.airline}</li>
            <li key={addCheckInList.id}>{addCheckInList.flightnumber}</li>
            <li key={addCheckInList.id}>{addCheckInList.destination}</li>
            <li key={addCheckInList.id}>{addCheckInList.registration}</li>
            <li key={addCheckInList.id}>{addCheckInList.checkin}</li>
          </ul>
        </Card>
      ))}
    </>
  );
};

export default NewAddCheckInList;

const Card = styled.section`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-transform: uppercase;
`;
