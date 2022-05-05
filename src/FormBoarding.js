import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { Form } from "./components/Form";

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
    <div className="form-container">
      
      <Form className="checkin-form">
        <Input
          handleInputChange={handleStartInputChange}
          value={values.timeStartBoarding}
          className="form-field"
          placeholder="Uhrzeit von"
          name="timeStart"
        />

        <Input
          handleInputChange={handleEndInputChange}
          value={values.timeStartBoarding}
          className="form-field"
          placeholder="Uhrzeit von"
          name="timeStart"
        />

        <Input
          handleInputChange={handleAirlineInputChange}
          value={values.airlineBoarding}
          className="form-field"
          placeholder="Airline"
          name="airline"
        />

        <Input
          handleInputChange={handleFlightNumberInputChange}
          value={values.flightNumberBoarding}
          className="form-field"
          placeholder="Flugnummer"
          name="flightnumber"
        />

        <Input
          handleInputChange={handleDestinationInputChange}
          value={values.destinationBoarding}
          className="form-field"
          placeholder="Destination"
          name="destination"
        />

        <Input
          handleInputChange={handleRegistrationInputChange}
          value={values.registrationBoarding}
          className="form-field"
          placeholder="Registration"
          name="registration"
        />

        <Input
          handleInputChange={handleCheckInInputChange}
          value={values.gate}
          className="form-field"
          placeholder="Gate"
          name="gate"
        />
          <Button>Speichern</Button>
      </Form>
    </div>
  );
}
