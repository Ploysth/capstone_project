import "./App.css";
import React, { useState } from "react";
import CheckInCardList from "./CheckInCardList";
import BoardingCardList from "./BoardingCardList";
import BreakCardList from "./BreakCardList";

import Form from "./Form";
import FormBoarding from "./FormBoarding";
import FormBreak from "./FormBreak";

function App() {
  const [cards, setCards] = useState(taskCards);
  const [boardingCards, setboardingCards] = useState(taskBoarding);
  const [breakCards, setbreakCards] = useState(taskBreak);

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
      <section>
        <CheckInCardList cards={cards} />
        <BoardingCardList boardingCards={boardingCards} />
        <BreakCardList breakCards={breakCards} />
      </section>

      <Form values={values} setValues={setValues} />
      <FormBoarding values={values} setValues={setValues} />
      <FormBreak values={values} setValues={setValues} />
    </>
  );
}

const taskCards = [
  {
    id: 1,
    title: "Check In",
    timestart: "03:50",
    timeend: "04:05",
    airline: "XQ",
    flightnumber: "963",
    destination: "ADB",
    registration: "TCSPB",
    checkIn: "402-403",
  },

  {
    id: 2,
    title: "Check In",
    timestart: "04.10",
    timeend: "06:00",
    airline: "LH",
    flightnumber: "133",
    destination: "FRA",
    registration: "DEQZA",
    checkIn: "200-205",
  },
];

const taskBoarding = [
  {
    id: 1,
    title: "Boarding",
    timestart: "03:50",
    timeend: "04:05",
    airline: "XQ",
    flightnumber: "963",
    destination: "ADB",
    registration: "TCSPB",
    gate: "337",
  },

  {
    id: 2,
    title: "Boarding",
    timestart: "04:10",
    timeend: "06:00",
    airline: "LH",
    flightnumber: "133",
    destination: "FRA",
    registration: "DEQZA",
    gate: "175",
  },
];

const taskBreak = [
  {
    id: 1,
    title: "Pause",
    timestart: "03:50",
    timeend: "04:05",
  },

  {
    id: 2,
    title: "Pause",
    timestart: "03:50",
    timeend: "04:05",
  },
];

export default App;
