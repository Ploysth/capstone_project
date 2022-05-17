import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardsPage from "./pages/CardsPage";
import Navigation from "./components/Navigation";
import CheckInPage from "./pages/CheckInPage";

function App() {
  const [allCheckInList, setAllCheckInList] = useState([]);

  const addCheckInHandler = (
    ciTimestart,
    ciTimeend,
    ciAirline,
    ciFlightNumber,
    ciDestination,
    ciRegistration,
    ciCheckInCounter
  ) => {
    setAllCheckInList((prevAllCheckInList) => {
      return [
        ...prevAllCheckInList,
        {
          timestart: ciTimestart,
          timeend: ciTimeend,
          airline: ciAirline,
          flightnumber: ciFlightNumber,
          destination: ciDestination,
          registration: ciRegistration,
          checkin: ciCheckInCounter,
          id: Math.random().toString(),
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
            />
          }
        />

        <Route path="/" element={<CardsPage />} />
      </Routes>
    </>
  );
}

export default App;
