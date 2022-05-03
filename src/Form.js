import React from "react";

export default function Form({ values, setValues }) {
  const handleStartInputChange = (event) => {
    setValues({ ...values, timeStartCheckIn: event.target.value });
  };

  const handleEndInputChange = (event) => {
    setValues({ ...values, timeEndCheckIn: event.target.value });
  };

  const handleArlineInputChange = (event) => {
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
    <div className="form-container">
      <h1>Add new Check In</h1>
      <form className="checkin-form">
        <input
          onChange={handleStartInputChange}
          value={values.timeStartCheckIn}
          className="form-field"
          placeholder="Uhrzeit von"
          name="timeStart"
        />

        <input
          onChange={handleEndInputChange}
          value={values.timeEndCheckIn}
          className="form-field"
          placeholder="Uhrzeit bis"
          name="timeEndCheckIn"
        />

        <input
          onChange={handleArlineInputChange}
          value={values.airlineCheckIn}
          className="form-field"
          placeholder="Airline"
          name="airline"
        />

        <input
          onChange={handleFlightNumberInputChange}
          value={values.flightNumberCheckIn}
          className="form-field"
          placeholder="Flugnummer"
          name="flightNumber"
        />

        <input
          onChange={handleDestinationInputChange}
          value={values.destinationCheckIn}
          className="form-field"
          placeholder="Destination"
          name="destination"
        />

        <input
          onChange={handleRegistrationInputChange}
          value={values.registrationCheckIn}
          className="form-field"
          placeholder="Registration"
          name="registration"
        />

        <input
          onChange={handleCheckInInputChange}
          value={values.checkin}
          className="form-field"
          placeholder="Check In Counter"
          name="checkin"
        />

        <button className="form-field" type="submit">
          Speichern
        </button>
      </form>
    </div>
  );
}
