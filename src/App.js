import "./App.css";
import React, { useState } from "react";
import CheckInCardList from "./CheckInCardList";
import BoardingCardList from "./BoardingCardList";

function App() {
  const [cards, setCards] = useState(taskCards);
  const [boardingCards, setboardingCards] = useState(taskBoarding);
  return (
    <>
      <CheckInCardList cards={cards} />
      <BoardingCardList boardingCards={boardingCards} />
    </>
  );
}

const taskCards = [
  {
    id: 1,
    title: "Check In",
    timestart: "Uhrzeit von: 03:50",
    timeend: "Uhrzeit bis: 04:05",
    airline: "Airline: XQ",
    flightnumber: "Flugnummer: 963",
    destination: "destination: ADB",
    registration: "Registration: TCSPB",
    checkIn: "Check-In: 402-403",
  },
];

const taskBoarding = [
  {
    id: 1,
    title: "Boarding",
    timestart: "Uhrzeit von: 03:50",
    timeend: "Uhrzeit bis: 04:05",
    airline: "Airline: XQ",
    flightnumber: "Flugnummer: 963",
    destination: "destination: ADB",
    registration: "Registration: TCSPB",
    gate: "Gate: 337",
  },
];

export default App;
