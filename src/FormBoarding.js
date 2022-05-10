import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import styled from "styled-components";

export default function FormBoarding({ values, setValues }) {
  const handleStartInputChange = (event) => {
    setValues({ ...values, timeStartBoarding: event.target.value });
  };

  const handleEndInputChange = (event) => {
    setValues({ ...values, timeEndBoarding: event.target.value });
  };

  const handleAirlineInputChange = (event) => {
    setValues({ ...values, airlineBoarding: event.target.value });
  };

  const handleFlightNumberInputChange = (event) => {
    setValues({ ...values, flightNumberBoarding: event.target.value });
  };

  const handleDestinationInputChange = (event) => {
    setValues({ ...values, destinationBoarding: event.target.value });
  };

  const handleRegistrationInputChange = (event) => {
    setValues({ ...values, registrationBoarding: event.target.value });
  };

  const handleCheckInInputChange = (event) => {
    setValues({ ...values, gate: event.target.value });
  };

  return (
    <Form>
      <label>Uhrzeit von:</label>
      <Input
        handleInputChange={handleStartInputChange}
        value={values.timeStartBoarding}
        className="form-field"
        placeholder="Uhrzeit von"
        name="timeStart"
      />

      <label>Uhrzeit bis:</label>
      <Input
        handleInputChange={handleEndInputChange}
        value={values.timeEndBoarding}
        className="form-field"
        placeholder="Uhrzeit von"
        name="timeEnd"
      />

      <label>Airline:</label>
      <Input
        handleInputChange={handleAirlineInputChange}
        value={values.airlineBoarding}
        className="form-field"
        placeholder="Airline"
        name="airline"
      />

      <label>Flightnumber:</label>
      <Input
        handleInputChange={handleFlightNumberInputChange}
        value={values.flightNumberBoarding}
        className="form-field"
        placeholder="Flugnummer"
        name="flightnumber"
      />

      <label>Destination:</label>
      <Input
        handleInputChange={handleDestinationInputChange}
        value={values.destinationBoarding}
        className="form-field"
        placeholder="Destination"
        name="destination"
      />

      <label>Registration:</label>
      <Input
        handleInputChange={handleRegistrationInputChange}
        value={values.registrationBoarding}
        className="form-field"
        placeholder="Registration"
        name="registration"
      />

      <label>Gate:</label>
      <Input
        handleInputChange={handleCheckInInputChange}
        value={values.gate}
        className="form-field"
        placeholder="Gate"
        name="gate"
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
