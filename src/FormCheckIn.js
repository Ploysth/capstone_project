import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import styled from "styled-components";

export default function FormCheckIn({ values, setValues }) {
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
    <Form>
      <label>Uhrzeit von:</label>
      <Input
        handleInputChange={handleStartInputChange}
        value={values.timeStartCheckIn}
        className="form-field"
        placeholder="Uhrzeit von"
        name="timeStart"
      />

      <label>Uhrzeit bis:</label>
      <Input
        handleInputChange={handleEndInputChange}
        value={values.timeEndCheckIn}
        className="form-field"
        placeholder="Uhrzeit bis"
        name="timeEnd"
      />

      <label>Airline:</label>
      <Input
        handleInputChange={handleAirlineInputChange}
        value={values.airlineCheckIn}
        className="form-field"
        placeholder="Airline"
        name="airline"
      />

      <label>Flightnumber:</label>
      <Input
        handleInputChange={handleFlightNumberInputChange}
        value={values.flightNumberCheckIn}
        className="form-field"
        placeholder="Flugnummer"
        name="flightNumber"
      />

      <label>Destination:</label>
      <Input
        handleInputChange={handleDestinationInputChange}
        value={values.destinationCheckIn}
        className="form-field"
        placeholder="Destination"
        name="destination"
      />

      <label>Registration:</label>
      <Input
        handleInputChange={handleRegistrationInputChange}
        value={values.registrationCheckIn}
        className="form-field"
        placeholder="Registration"
        name="registration"
      />

      <label>Check In:</label>
      <Input
        handleInputChange={handleCheckInInputChange}
        value={values.checkin}
        className="form-field"
        placeholder="Check In Counter"
        name="checkin"
      />
      <Button>Speichern</Button>
    </Form>
  );
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  gap: 20px;
`;
