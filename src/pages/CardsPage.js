import React from "react";
import ListCheckIn from "../components/ListCheckIn";

export default function CardsPage({
  testCheckInList,
  setTestCheckInList,
  setIsEdit,
  setEditID,
  setInputStartTimeCheckIn,
  setInputEndTimeCheckIn,
  setInputAirline,
  setInputFlightNumber,
  setInputDestination,
  setInputRegistration,
  setInputCheckInCounter,
}) {
  const removeTestCheckInCard = (id) => {
    setTestCheckInList(
      testCheckInList.filter((checkInItem) => checkInItem.id !== id)
    );
  };

  const editCheckInItem = (id) => {
    const specificItemCheckIn = testCheckInList.find(
      (checkInItem) => checkInItem.id === id
    );
    setIsEdit(true);
    setEditID(id);
    setInputStartTimeCheckIn(specificItemCheckIn.startTimeCheckIn);
    setInputEndTimeCheckIn(specificItemCheckIn.endTimeCheckIn);
    setInputAirline(specificItemCheckIn.airlineCheckIn);
    setInputFlightNumber(specificItemCheckIn.flightNumberCheckIn);
    setInputDestination(specificItemCheckIn.destinationCheckIn);
    setInputRegistration(specificItemCheckIn.registrationCheckIn);
    setInputCheckInCounter(specificItemCheckIn.checkInCounterCheckIn);
  };

  return (
    <section>
      <ListCheckIn
        checkInItems={testCheckInList}
        removeTestCheckInCard={removeTestCheckInCard}
        editCheckInItem={editCheckInItem}
      />
    </section>
  );
}
