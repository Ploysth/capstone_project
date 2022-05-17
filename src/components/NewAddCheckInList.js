import React from "react";
import Card from "../styling/StylingCheckInList";

const NewAddCheckInList = ({ newCheckInList, removeCheckInCards, id }) => {
  return (
    <>
      {newCheckInList.map((addCheckInList) => (
        <Card>
          <h1>Check In</h1>
          <ul>
            <li key={addCheckInList.id}>{addCheckInList.timestart}</li>
            <li key={addCheckInList.id}>{addCheckInList.timeend}</li>
            <li key={addCheckInList.id}>{addCheckInList.airline}</li>
            <li key={addCheckInList.id}>{addCheckInList.flightnumber}</li>
            <li key={addCheckInList.id}>{addCheckInList.destination}</li>
            <li key={addCheckInList.id}>{addCheckInList.registration}</li>
            <li key={addCheckInList.id}>{addCheckInList.checkin}</li>
          </ul>
          <button onClick={() => removeCheckInCards(id)}>Delete</button>
        </Card>
      ))}
    </>
  );
};

export default NewAddCheckInList;
