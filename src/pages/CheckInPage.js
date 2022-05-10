import React from "react";
import FormCheckIn from "../FormCheckIn";
import styled from "styled-components";

export default function CheckInPage({
  values,
  setValues,
  enteredTimeStart,
  setEnteredTimeStart,
  enteredTimeEnd,
  setEnteredTimeEnd,
  enteredAirline,
  setEnteredAirline,
  enteredFlightNumber,
  setEnteredFlightNumber,
  enteredDestination,
  setEnteredDestination,
  enteredRegistration,
  setEnteredRegistration,
  enteredCheckInCounter,
  setEnteredCheckInCounter,
}) {
  return (
    <section>
      <Header>Add new Check In</Header>
      <FormCheckIn
        values={values}
        setValues={setValues}
        enteredTimeStart={enteredTimeStart}
        setEnteredTimeStart={setEnteredTimeStart}
        enteredTimeEnd={enteredTimeEnd}
        setEnteredTimeEnd={setEnteredTimeEnd}
        enteredAirline={enteredAirline}
        setEnteredAirline={setEnteredAirline}
        enteredFlightNumber={enteredFlightNumber}
        setEnteredFlightNumber={setEnteredFlightNumber}
        enteredDestination={enteredDestination}
        setEnteredDestination={setEnteredDestination}
        enteredRegistration={enteredRegistration}
        setEnteredRegistration={setEnteredRegistration}
        enteredCheckInCounter={enteredCheckInCounter}
        setEnteredCheckInCounter={setEnteredCheckInCounter}
      />
    </section>
  );
}

const Header = styled.h1`
  font-size: 36px;
  font-weight: 300;
  color: #36436f;
  display: flex;
  justify-content: center;
`;
