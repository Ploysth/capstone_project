import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { Form } from "./components/Form";

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
    <section className="form-container">
      <Form className="checkin-form">
        <Input
          handleInputChange={handleStartInputChange}
          value={values.timeStartCheckIn}
          className="form-field"
          placeholder="Uhrzeit von"
          name="timeStart"
        />

        <Input
          handleInputChange={handleEndInputChange}
          value={values.timeEndCheckIn}
          className="form-field"
          placeholder="Uhrzeit bis"
          name="timeEnd"
        />

        <Input
          handleInputChange={handleAirlineInputChange}
          value={values.airlineCheckIn}
          className="form-field"
          placeholder="Airline"
          name="airline"
        />

        <Input
          handleInputChange={handleFlightNumberInputChange}
          value={values.flightNumberCheckIn}
          className="form-field"
          placeholder="Flugnummer"
          name="flightNumber"
        />

        <Input
          handleInputChange={handleDestinationInputChange}
          value={values.destinationCheckIn}
          className="form-field"
          placeholder="Destination"
          name="destination"
        />

        <Input
          handleInputChange={handleRegistrationInputChange}
          value={values.registrationCheckIn}
          className="form-field"
          placeholder="Registration"
          name="registration"
        />

        <Input
          handleInputChange={handleCheckInInputChange}
          value={values.checkin}
          className="form-field"
          placeholder="Check In Counter"
          name="checkin"
        />
        <Button>Speichern</Button>
      </Form>
    </section>
  );
}
