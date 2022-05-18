import React from "react";
import Card from "../styling/StylingCheckInList";

const NewAddCheckInList = ({ newCheckInList, removeCheckInCards, id }) => {
  return (
    <>
      {newCheckInList.map((addCheckInList) => (
        <Card key={addCheckInList.id}>
          <h1>Check In</h1>
          <ul>
            <li>{addCheckInList.timestart}</li>
            <li>{addCheckInList.timeend}</li>
            <li>{addCheckInList.airline}</li>
            <li>{addCheckInList.flightnumber}</li>
            <li>{addCheckInList.destination}</li>
            <li>{addCheckInList.registration}</li>
            <li>{addCheckInList.checkin}</li>
          </ul>
          <button onClick={() => removeCheckInCards(addCheckInList.id)}>
            Delete
          </button>
        </Card>
      ))}
    </>
  );
};

export default NewAddCheckInList;
