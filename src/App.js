import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardsPage from "./pages/CardsPage";
import Navigation from "./components/Navigation";
import CheckInPage from "./pages/CheckInPage";
import { nanoid } from "nanoid";

function App() {
  const [allCheckInList, setAllCheckInList] = useState([]);
  console.log(allCheckInList);
  const removeCheckInCards = (id) => {
    const newCheckInCards = allCheckInList.filter(
      (listCheckIn) => listCheckIn.id !== id
    );
    setAllCheckInList(newCheckInCards);
  };

  const addCheckInHandler = (
    checkInHandlerTimestart,
    checkInHandlerTimeend,
    checkInHandlerAirline,
    checkInHandlerFlightNumber,
    checkInHandlerDestination,
    checkInHandlerRegistration,
    checkInHandlerCheckInCounter
  ) => {
    setAllCheckInList((prevAllCheckInList) => {
      return [
        ...prevAllCheckInList,
        {
          timestart: checkInHandlerTimestart,
          timeend: checkInHandlerTimeend,
          airline: checkInHandlerAirline,
          flightnumber: checkInHandlerFlightNumber,
          destination: checkInHandlerDestination,
          registration: checkInHandlerRegistration,
          checkin: checkInHandlerCheckInCounter,
          id: nanoid(),
        },
      ];
    });
  };

  return (
    <>
      <Navigation />

      <Routes>
        <Route
          path="/checkin"
          element={
            <CheckInPage
              onNewForm={addCheckInHandler}
              allCheckInList={allCheckInList}
              removeCheckInCards={removeCheckInCards}
            />
          }
        />

        <Route path="/" element={<CardsPage />} />
      </Routes>
    </>
  );
}

export default App;
