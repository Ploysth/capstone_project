import React from "react";

export default function FormBreak({ values }) {
  return (
    <div className="form-container">
      <h1>Add Break</h1>
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
      </form>
    </div>
  );
}
