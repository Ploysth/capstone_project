import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardsPage from "./pages/CardsPage";
import Navigation from "./components/Navigation";
import NewForm from "./pages/NewForm";
import { taskCards, taskBoarding, taskBreak } from "./components/FakeTasks";

function App() {
  const [cards, setCards] = useState(taskCards);
  const [boardingCards, setboardingCards] = useState(taskBoarding);
  const [breakCards, setbreakCards] = useState(taskBreak);

  const [allCheckInList, setAllCHeckInList] = useState([]);

  const addCheckInHandler = (
    ciTimestart,
    ciTimeend,
    ciAirline,
    ciFlightNumber,
    ciDestination,
    ciRegistration,
    ciCheckInCounter
  ) => {
    setAllCHeckInList((prevAllCheckInList) => {
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
          path="/CheckIn"
          element={
            <NewForm
              onNewForm={addCheckInHandler}
              allCheckInList={allCheckInList}
            />
          }
        />

        <Route
          path="/"
          element={
            <CardsPage
              cards={cards}
              setCards={setCards}
              boardingCards={boardingCards}
              setboardingCards={setboardingCards}
              breakCards={breakCards}
              setbreakCards={setbreakCards}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
