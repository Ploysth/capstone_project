import React from "react";

export default function Form({ values }) {
  return (
    <div className="form-container">
      <h1>Add new Check In</h1>
      <form className="checkin-form">
        <input
          value={values.timeStart}
          className="form-field"
          placeholder="Uhrzeit von"
          name="timeStart"
        />

        <input
          value={values.timeEnd}
          className="form-field"
          placeholder="Uhrzeit bis"
          name="timeEnd"
        />

        <input
          value={values.airline}
          className="form-field"
          placeholder="Airline"
          name="airline"
        />

        <input
          value={values.flightNumber}
          className="form-field"
          placeholder="Flugnummer"
          name="flightNumber"
        />

        <input
          value={values.destination}
          className="form-field"
          placeholder="Destination"
          name="destination"
        />

        <input
          value={values.registration}
          className="form-field"
          placeholder="Registration"
          name="registration"
        />

        <input
          value={values.checkin}
          className="form-field"
          placeholder="Check In Counter"
          name="checkin"
        />
      </form>
    </div>
  );
}
