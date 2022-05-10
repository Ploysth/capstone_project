import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import styled from "styled-components";

export default function FormCheckIn({
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
  const handleStartInputChange = (event) => {
    setValues({ ...values, timeStartCheckIn: event.target.value });
  };

  const handleEndInputChange = (event) => {
    setValues({ ...values, timeEndCheckIn: event.target.value });
  };

  const handleAirlineInputChange = (event) => {
    setValues({ ...values, airlineCheckIn: event.target.value });
  };

  const handleFlightNumberInputChange = (event) => {
    setValues({ ...values, flightNumberCheckIn: event.target.value });
  };

  const handleDestinationInputChange = (event) => {
    setValues({ ...values, destinationCheckIn: event.target.value });
  };

  const handleRegistrationInputChange = (event) => {
    setValues({ ...values, registrationCheckIn: event.target.value });
  };

  const handleCheckInInputChange = (event) => {
    setValues({ ...values, checkin: event.target.value });
  };

  return (
    <>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setEnteredTimeStart(values.timeStartCheckIn);
          setEnteredTimeEnd(values.timeEndCheckIn);
          setEnteredAirline(values.airlineCheckIn);
          setEnteredFlightNumber(values.flightNumberCheckIn);
          setEnteredDestination(values.destinationCheckIn);
          setEnteredRegistration(values.registrationCheckIn);
          setEnteredCheckInCounter(values.checkin);
        }}
      >
        <label>
          Uhrzeit von:
          <Input
            handleInputChange={handleStartInputChange}
            type="text"
            value={values.timeStartCheckIn}
            className="form-field"
            placeholder="Uhrzeit von"
            name="timeStart"
          />
        </label>

        <label>
          Uhrzeit bis:
          <Input
            handleInputChange={handleEndInputChange}
            type="text"
            value={values.timeEndCheckIn}
            className="form-field"
            placeholder="Uhrzeit bis"
            name="timeEnd"
          />
        </label>

        <label>
          Airline:
          <Input
            handleInputChange={handleAirlineInputChange}
            type="text"
            value={values.airlineCheckIn}
            className="form-field"
            placeholder="Airline"
            name="airline"
          />
        </label>

        <label>
          Flightnumber:
          <Input
            handleInputChange={handleFlightNumberInputChange}
            type="text"
            value={values.flightNumberCheckIn}
            className="form-field"
            placeholder="Flugnummer"
            name="flightNumber"
          />
        </label>

        <label>
          Destination:
          <Input
            handleInputChange={handleDestinationInputChange}
            type="text"
            value={values.destinationCheckIn}
            className="form-field"
            placeholder="Destination"
            name="destination"
          />
        </label>

        <label>
          Registration:
          <Input
            handleInputChange={handleRegistrationInputChange}
            type="text"
            value={values.registrationCheckIn}
            className="form-field"
            placeholder="Registration"
            name="registration"
          />
        </label>

        <label>
          Check In:
          <Input
            handleInputChange={handleCheckInInputChange}
            type="text"
            value={values.checkin}
            className="form-field"
            placeholder="Check In Counter"
            name="checkin"
          />
        </label>

        <Button type="submit">Speichern</Button>
      </Form>
      <p>{enteredTimeStart} </p>
      <p>{enteredTimeEnd} </p>
      <p>{enteredAirline} </p>
      <p>{enteredFlightNumber} </p>
      <p>{enteredDestination} </p>
      <p>{enteredRegistration} </p>
      <p>{enteredCheckInCounter} </p>
    </>
  );
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  gap: 20px;
`;
