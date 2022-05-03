import React from "react";

export default function Form() {
  return (
    <div className="form-container">
        <h1>Add new Check In</h1>
      <form className="checkin-form">
        <input
          className="form-field"
          placeholder="Uhrzeit von"
          name="timeStart"
        />

        <input
          className="form-field"
          placeholder="Uhrzeit bis"
          name="timeEnd"
        />

        <input className="form-field" placeholder="Airline" name="airline" />

        <input
          className="form-field"
          placeholder="Flugnummer"
          name="flightnumber"
        />

        <input
          className="form-field"
          placeholder="Destination"
          name="destination"
        />

        <input
          className="form-field"
          placeholder="Registration"
          name="registration"
        />

        <input
          className="form-field"
          placeholder="Check In Counter"
          name="checkin"
        />
      </form>
    </div>
  );
}
