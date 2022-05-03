import React from 'react'

export default function FormBreak() {
  return (
    <div className="form-container">
        <h1>Add Break</h1>
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

        
      </form>
    </div>
  );
}
