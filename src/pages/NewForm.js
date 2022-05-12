import React from "react";
import { useState } from "react";
import NewButton from "../components/NewButton";
import NewAddCheckInList from "../components/NewAddCheckInList";
import styled from "styled-components";

const NewForm = ({ props, allCheckInList }) => {
  const [enteredNewStartTimeCheckIn, setEnteredNewStartTimeCheckIn] =
    useState("");
  const [enteredNewEndTimeCheckIn, setEnteredNewEndTimeCheckIn] = useState("");
  const [enteredNewAirlineCheckIn, setEnteredNewAirlineCheckIn] = useState("");
  const [enteredNewFlightNumberCheckIn, setEnteredNewFlightNumberCheckIn] =
    useState("");
  const [enteredNewDestinatioCheckIn, setEnteredNewDestinationCheckIn] =
    useState("");
  const [enteredNewRegistrationCheckIn, setEnteredNewRegistrationCheckIn] =
    useState("");
  const [enteredNewCheckInCounter, setEnteredNewCheckInCounter] = useState("");

  const addNewCheckInHandler = (event) => {
    event.preventDefault();
    props.onNewForm(
      enteredNewStartTimeCheckIn,
      enteredNewEndTimeCheckIn,
      enteredNewAirlineCheckIn,
      enteredNewFlightNumberCheckIn,
      enteredNewDestinatioCheckIn,
      enteredNewRegistrationCheckIn,
      enteredNewCheckInCounter
    );
    setEnteredNewStartTimeCheckIn("");
    setEnteredNewEndTimeCheckIn("");
    setEnteredNewAirlineCheckIn("");
    setEnteredNewFlightNumberCheckIn("");
    setEnteredNewDestinationCheckIn("");
    setEnteredNewRegistrationCheckIn("");
    setEnteredNewCheckInCounter("");
  };

  const timestartChangeHandler = (event) => {
    setEnteredNewStartTimeCheckIn(event.target.value);
  };

  const timesendChangeHandler = (event) => {
    setEnteredNewEndTimeCheckIn(event.target.value);
  };

  const airlineChangeHandler = (event) => {
    setEnteredNewAirlineCheckIn(event.target.value);
  };

  const flightnumberChangeHandler = (event) => {
    setEnteredNewFlightNumberCheckIn(event.target.value);
  };

  const destinationChangeHandler = (event) => {
    setEnteredNewDestinationCheckIn(event.target.value);
  };

  const registrationChangeHandler = (event) => {
    setEnteredNewRegistrationCheckIn(event.target.value);
  };

  const checkinChangeHandler = (event) => {
    setEnteredNewCheckInCounter(event.target.value);
  };

  return (
    <Formfieldset>
      <h1>Add New Check In</h1>
      <form onSubmit={addNewCheckInHandler}>
        <Label htmlFor="timestart">Uhrzeit von:</Label>
        <Input
          id="timestart"
          type="text"
          value={enteredNewStartTimeCheckIn}
          onChange={timestartChangeHandler}
        />

        <Label htmlFor="timeend">Uhrzeit bis:</Label>
        <Input
          id="timeend"
          type="text"
          value={enteredNewEndTimeCheckIn}
          onChange={timesendChangeHandler}
        />

        <Label htmlFor="airline">Airline:</Label>
        <Input
          id="airline"
          type="text"
          value={enteredNewAirlineCheckIn}
          onChange={airlineChangeHandler}
        />

        <Label htmlFor="flightnumber">Flightnumber:</Label>
        <Input
          id="flightnumber"
          type="text"
          value={enteredNewFlightNumberCheckIn}
          onChange={flightnumberChangeHandler}
        />

        <Label htmlFor="destination">Destination:</Label>
        <Input
          id="destination"
          type="text"
          value={enteredNewDestinatioCheckIn}
          onChange={destinationChangeHandler}
        />

        <Label htmlFor="registration">Registration:</Label>
        <Input
          id="registration"
          type="text"
          value={enteredNewRegistrationCheckIn}
          onChange={registrationChangeHandler}
        />

        <Label htmlFor="checkin">Check In:</Label>
        <Input
          id="checkin"
          type="text"
          value={enteredNewCheckInCounter}
          onChange={checkinChangeHandler}
        />
        <NewButton type="submit">Add Check In</NewButton>
      </form>

      <NewAddCheckInList newCheckInList={allCheckInList} />
    </Formfieldset>
  );
};

export default NewForm;

const Formfieldset = styled.fieldset`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  font: inherit;
  display: block;
  width: 100%;
  border: 1px solid black;
  padding: 0.15rem;
  margin-bottom: 0.5rem;
`;
