import React from "react";

export default function FormBoarding({ values }) {
  return (
    <div className="form-container">
      <h1>Add new Boarding</h1>
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
          name="flightnumber"
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
          value={values.gate}
          className="form-field"
          placeholder="Gate"
          name="gate"
        />

<button className="form-field" type="submit">
          Speichern
        </button>
        
      </form>
    </div>
  );
}
