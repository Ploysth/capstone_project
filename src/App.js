import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import CheckInCardList from "./CheckInCardList";
import BoardingCardList from "./BoardingCardList";
import BreakCardList from "./BreakCardList";

import CheckInPage from "./pages/CheckInPage";
import BoardingPage from "./pages/BoardingPage";
import BreakPage from "./pages/BreakPage";

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
    <>
      <Routes>
        <Route path="/" element={<Link to="/checkin">Go To Fly Tasks</Link>} />

        <Route
          path="/checkin"
          element={<CheckInPage values={values} setValues={setValues} />}
        />

        <Route
          path="/boarding"
          element={<Link to="/boardingForm">Form Boarding</Link>}
        />
        <Route
          path="/boardingForm"
          element={<BoardingPage values={values} setValues={setValues} />}
        />

        <Route
          path="/break"
          element={<Link to="/breakForm">Form Break</Link>}
        />
        <Route
          path="/breakForm"
          element={<BreakPage values={values} setValues={setValues} />}
        />
      </Routes>

      
    </>
    //

    //   <CheckInCardList cards={cards} />
    //   <BoardingCardList boardingCards={boardingCards} />
    //   <BreakCardList breakCards={breakCards} />

    // </section>
  );
}

export default App;
