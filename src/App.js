import { useState } from "react";
import { Link } from "react-router-dom";

import CheckInCardList from "./CheckInCardList";
import BoardingCardList from "./BoardingCardList";
import BreakCardList from "./BreakCardList";

import FormCheckIn from "./FormCheckIn";
import FormBoarding from "./FormBoarding";
import FormBreak from "./FormBreak";
import { taskCards, taskBoarding, taskBreak } from "./components/FakeTasks";

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
    <section>
      <CheckInCardList cards={cards} />
      <BoardingCardList boardingCards={boardingCards} />
      <BreakCardList breakCards={breakCards} />


    <Link to="/formCheckIn">Add Check In</Link>
    <Link to="/formBoarding">Add Boarding</Link>
    <Link to="/formBreak">Add Break</Link>

    <FormCheckIn values={values} setValues={setValues} />
      <FormBoarding values={values} setValues={setValues} />
      <FormBreak values={values} setValues={setValues} />
    </section>
  );
}

export default App;
