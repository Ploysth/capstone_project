import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import NewAddCheckInList from "../components/NewAddCheckInList";
import styled from "styled-components";

const isEmpty = (value) => value.trim() === "";
const isTwoChars = (value) => value.trim().length === 2;
const isThreeChars = (value) => value.trim().length === 3;

const CheckInPage = ({ onNewForm, allCheckInList }) => {
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

  const [formIsValidity, setFormIsValidity] = useState({
    timestartCheckIn: true,
    timeendCheckIn: true,
    airlineCheckIn: true,
    flightNumberCheckIn: true,
    destinationCheckIn: true,
    registrationCheckIn: true,
    checkinCounter: true,
  });

  const addNewCheckInHandler = (event) => {
    event.preventDefault();

    const enteredNewStartTimeCheckInIsValid = !isEmpty(
      enteredNewStartTimeCheckIn
    );
    const enteredNewEndTimeCheckInIsValid = !isEmpty(enteredNewEndTimeCheckIn);
    const enteredNewAirlineCheckInIsValid = isTwoChars(
      enteredNewAirlineCheckIn
    );
    const enteredNewFlightNumberCheckInIsValid = isThreeChars(
      enteredNewFlightNumberCheckIn
    );
    const enteredNewDestinatioCheckInIsValid = !isEmpty(
      enteredNewDestinatioCheckIn
    );
    const enteredNewRegistrationCheckInIsValid = !isEmpty(
      enteredNewRegistrationCheckIn
    );
    const enteredNewCheckInCounterIsValid = !isEmpty(enteredNewCheckInCounter);

    setFormIsValidity({
      timestartCheckIn: enteredNewStartTimeCheckInIsValid,
      timeendCheckIn: enteredNewEndTimeCheckInIsValid,
      airlineCheckIn: enteredNewAirlineCheckInIsValid,
      flightNumberCheckIn: enteredNewFlightNumberCheckInIsValid,
      destinationCheckIn: enteredNewDestinatioCheckInIsValid,
      registrationCheckIn: enteredNewRegistrationCheckInIsValid,
      checkinCounter: enteredNewCheckInCounterIsValid,
    });

    const formIsValid =
      enteredNewStartTimeCheckInIsValid &&
      enteredNewEndTimeCheckInIsValid &&
      enteredNewDestinatioCheckInIsValid &&
      enteredNewRegistrationCheckInIsValid &&
      enteredNewCheckInCounterIsValid;

    if (!formIsValid) {
      return;
    }

    onNewForm(
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
    <>
      <Formfieldset>
        <h1>Add New Check In</h1>
        <form onSubmit={addNewCheckInHandler}>
          <FormControl invalid={!formIsValidity.timestartCheckIn}>
            <label htmlFor="timestart">Start Time:</label>
            <input
              id="timestart"
              type="time"
              name="timestartCheckIn"
              value={enteredNewStartTimeCheckIn}
              onChange={timestartChangeHandler}
            />
            {!formIsValidity.timestartCheckIn && (
              <p>Please enter a valid start time!</p>
            )}
          </FormControl>

          <FormControl invalid={!formIsValidity.timeendCheckIn}>
            <label htmlFor="timeend">End Time:</label>
            <input
              id="timeend"
              type="time"
              name="timeendCheckIn"
              value={enteredNewEndTimeCheckIn}
              onChange={timesendChangeHandler}
            />
            {!formIsValidity.timeendCheckIn && (
              <p>Please enter a valid end time!</p>
            )}
          </FormControl>

          <FormControl invalid={!formIsValidity.airlineCheckIn}>
            <label htmlFor="airline">Airline:</label>
            <input
              id="airline"
              type="text"
              name="airlineCheckIn"
              maxlength="2"
              value={enteredNewAirlineCheckIn}
              onChange={airlineChangeHandler}
            />
            {!formIsValidity.airlineCheckIn && (
              <p>Please enter a valid airline (2 characters long)!</p>
            )}
          </FormControl>

          <FormControl invalid={!formIsValidity.flightNumberCheckIn}>
            <label htmlFor="flightnumber">Flightnumber:</label>
            <input
              id="flightnumber"
              type="number"
              name="flightNumberCheckIn"
              maxlength="4"
              value={enteredNewFlightNumberCheckIn}
              onChange={flightnumberChangeHandler}
            />
            {!formIsValidity.flightNumberCheckIn && (
              <p>Please enter a valid flightnumber (3 characters long)!</p>
            )}
          </FormControl>

          <FormControl invalid={!formIsValidity.destinationCheckIn}>
            <label htmlFor="destination">Destination:</label>
            <input
              id="destination"
              type="text"
              name="destinationCheckIn"
              maxlength="3"
              value={enteredNewDestinatioCheckIn}
              onChange={destinationChangeHandler}
            />
            {!formIsValidity.destinationCheckIn && (
              <p>Please enter a valid destination!</p>
            )}
          </FormControl>

          <FormControl invalid={!formIsValidity.registrationCheckIn}>
            <label htmlFor="registration">Registration:</label>
            <input
              id="registration"
              type="text"
              name="registrationCheckIn"
              value={enteredNewRegistrationCheckIn}
              onChange={registrationChangeHandler}
            />

            {!formIsValidity.registrationCheckIn && (
              <p>Please enter a valid registration!</p>
            )}
          </FormControl>

          <FormControl invalid={!formIsValidity.checkinCounter}>
            <label htmlFor="checkin">Check In:</label>
            <input
              id="checkin"
              type="text"
              name="checkinCounter"
              value={enteredNewCheckInCounter}
              onChange={checkinChangeHandler}
            />
            {!formIsValidity.checkinCounter && (
              <p>Please enter a valid registration!</p>
            )}
          </FormControl>

          <Button type="submit">Add Check In</Button>
        </form>
      </Formfieldset>

      <NewAddCheckInList newCheckInList={allCheckInList} />
    </>
  );
};

export default CheckInPage;

const Formfieldset = styled.fieldset`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

const FormControl = styled.div`
  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "#ce0d0d" : "black")};
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "#ce0d0d" : "black")};
    padding: 0.15rem;
    margin-bottom: 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    text-transform: uppercase;
  }

  &.invalid label {
    color: red;
  }

  & p {
    color: white;
    background-color: #ce0d0d;
    font-size: 12px;
    padding: 0.3rem;
  }
`;
