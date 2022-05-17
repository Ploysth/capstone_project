import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import NewAddCheckInList from "../components/NewAddCheckInList";
import { Form, Wrapper } from "../styling/StylingCheckInPage";
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
  const [enteredNewDestinationCheckIn, setEnteredNewDestinationCheckIn] =
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
    const enteredNewDestinationCheckInIsValid = !isEmpty(
      enteredNewDestinationCheckIn
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
      destinationCheckIn: enteredNewDestinationCheckInIsValid,
      registrationCheckIn: enteredNewRegistrationCheckInIsValid,
      checkinCounter: enteredNewCheckInCounterIsValid,
    });

    const formIsValid =
      enteredNewStartTimeCheckInIsValid &&
      enteredNewEndTimeCheckInIsValid &&
      enteredNewDestinationCheckInIsValid &&
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
      enteredNewDestinationCheckIn,
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
      <Form>
        <h1>Add New Check In</h1>
        <form onSubmit={addNewCheckInHandler}>
          <Wrapper invalid={!formIsValidity.timestartCheckIn}>
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
          </Wrapper>

          <Wrapper invalid={!formIsValidity.timeendCheckIn}>
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
          </Wrapper>

          <Wrapper invalid={!formIsValidity.airlineCheckIn}>
            <label htmlFor="airline">Airline:</label>
            <input
              id="airline"
              type="text"
              name="airlineCheckIn"
              maxLength="2"
              value={enteredNewAirlineCheckIn}
              onChange={airlineChangeHandler}
            />
            {!formIsValidity.airlineCheckIn && (
              <p>Please enter a valid airline (2 characters long)!</p>
            )}
          </Wrapper>

          <Wrapper invalid={!formIsValidity.flightNumberCheckIn}>
            <label htmlFor="flightnumber">Flightnumber:</label>
            <input
              id="flightnumber"
              type="number"
              name="flightNumberCheckIn"
              maxLength="4"
              value={enteredNewFlightNumberCheckIn}
              onChange={flightnumberChangeHandler}
            />
            {!formIsValidity.flightNumberCheckIn && (
              <p>Please enter a valid flightnumber (3 characters long)!</p>
            )}
          </Wrapper>

          <Wrapper invalid={!formIsValidity.destinationCheckIn}>
            <label htmlFor="destination">Destination:</label>
            <input
              id="destination"
              type="text"
              name="destinationCheckIn"
              maxLength="3"
              value={enteredNewDestinationCheckIn}
              onChange={destinationChangeHandler}
            />
            {!formIsValidity.destinationCheckIn && (
              <p>Please enter a valid destination!</p>
            )}
          </Wrapper>

          <Wrapper invalid={!formIsValidity.registrationCheckIn}>
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
          </Wrapper>

          <Wrapper invalid={!formIsValidity.checkinCounter}>
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
          </Wrapper>

          <Button type="submit">Add Check In</Button>
        </form>
      </Form>

      <NewAddCheckInList newCheckInList={allCheckInList} />
    </>
  );
};

export default CheckInPage;
