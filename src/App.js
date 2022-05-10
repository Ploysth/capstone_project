import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CheckInPage from "./pages/CheckInPage";
import BoardingPage from "./pages/BoardingPage";
import BreakPage from "./pages/BreakPage";
import CardsPage from "./pages/CardsPage";
import Navigation from "./components/Navigation";
import { taskCards, taskBoarding, taskBreak } from "./components/FakeTasks";

function App() {
  const [cards, setCards] = useState(taskCards);
  const [boardingCards, setboardingCards] = useState(taskBoarding);
  const [breakCards, setbreakCards] = useState(taskBreak);

  const [enteredTimeStart, setEnteredTimeStart] = useState("");
  const [enteredTimeEnd, setEnteredTimeEnd] = useState("");
  const [enteredAirline, setEnteredAirline] = useState("");
  const [enteredFlightNumber, setEnteredFlightNumber] = useState("");
  const [enteredDestination, setEnteredDestination] = useState("");
  const [enteredRegistration, setEnteredRegistration] = useState("");
  const [enteredCheckInCounter, setEnteredCheckInCounter] = useState("");

  const [values, setValues] = useState({
    timeStart: "",
    timeEnd: "",
    airline: "",
    flightNumber: "",
    destination: "",
    registration: "",
    checkin: "",
    gate: "",
  });

  return (
    <>
      <Navigation />

      <Routes>
        <Route
          path="/checkin"
          element={
            <CheckInPage
              values={values}
              setValues={setValues}
              enteredTimeStart={enteredTimeStart}
              setEnteredTimeStart={setEnteredTimeStart}
              enteredTimeEnd={enteredTimeEnd}
              setEnteredTimeEnd={setEnteredTimeEnd}
              enteredAirline={enteredAirline}
              setEnteredAirline={setEnteredAirline}
              enteredFlightNumber={enteredFlightNumber}
              setEnteredFlightNumber={setEnteredFlightNumber}
              enteredDestination={enteredDestination}
              setEnteredDestination={setEnteredDestination}
              enteredRegistration={enteredRegistration}
              setEnteredRegistration={setEnteredRegistration}
              enteredCheckInCounter={enteredCheckInCounter}
              setEnteredCheckInCounter={setEnteredCheckInCounter}
            />
          }
        />

        <Route
          path="/boardingForm"
          element={<BoardingPage values={values} setValues={setValues} />}
        />

        <Route
          path="/breakForm"
          element={<BreakPage values={values} setValues={setValues} />}
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
