import React from "react";
import styled from "styled-components";

const NewAddCheckInList = (props) => {
  return (
    <ul>
      {props.newCheckInList.map((addCheckInList) => (
        <>
          <StyledLi key={addCheckInList.id}>
            {addCheckInList.timestart}
          </StyledLi>
          <li key={addCheckInList.id}>{addCheckInList.timeend}</li>
          <li key={addCheckInList.id}>{addCheckInList.airline}</li>
          <li key={addCheckInList.id}>{addCheckInList.flightnumber}</li>
          <li key={addCheckInList.id}>{addCheckInList.destination}</li>
          <li key={addCheckInList.id}>{addCheckInList.registration}</li>
          <li key={addCheckInList.id}>{addCheckInList.checkin}</li>
        </>
      ))}
    </ul>
  );
};

export default NewAddCheckInList;

const StyledLi = styled.li`
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid black;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
`;
