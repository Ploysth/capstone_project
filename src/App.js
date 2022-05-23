import { Routes, Route } from "react-router-dom";
import CardsPage from "./pages/CardsPage";
import Navigation from "./components/Navigation";
import CheckInPage from "./pages/CheckInPage";
import BreakPage from "./pages/BreakPage";
import BoardingPage from "./pages/BoardingPage";

function App() {
  return (
    <>
      <section>
        <Routes>
          <Route path="/checkin" element={<CheckInPage />} />
          <Route path="/boarding" element={<BoardingPage />} />
          <Route path="/break" element={<BreakPage />} />
          <Route path="/" element={<CardsPage />} />
        </Routes>
      </section>

      <Navigation />
    </>
  );
}

export default App;
