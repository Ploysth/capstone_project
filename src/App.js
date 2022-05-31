import { Routes, Route } from "react-router-dom";
import CardsPage from "./pages/CardsPage";
import Navigation from "./components/Navigation";
import CheckInPage from "./pages/CheckInPage";
import BreakPage from "./pages/BreakPage";
import BoardingPage from "./pages/BoardingPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [checkInList, setCheckInList] = useState([]);
  const [boardingInList, setBordingInList] = useState([]);
  const [breakList, setbreakInList] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);

  let navigate = useNavigate();

  function addCheckIn(newCheckInData) {
    setCheckInList([...checkInList, newCheckInData]);
  }

  function addBoarding(newBoardingInData) {
    setBordingInList([...boardingInList, newBoardingInData]);
  }

  function addBreak(newBreakData) {
    setbreakInList([...breakList, newBreakData]);
  }

  function updateBreak(updatedBreak) {
    const updatedBreaks = breakList.map((breakItem) => {
      if (breakItem.id === updatedBreak.id) {
        return updatedBreak;
      } else {
        return breakItem;
      }
    });
    setbreakInList(updatedBreaks);
    setIsEdit(false);
    setEditID(null);
    navigate("/");
  }

  function updateBoarding(updatedBoarding) {
    const updatedBoardings = boardingInList.map((boardingItem) => {
      if (boardingItem.id === updatedBoarding.id) {
        return updatedBoarding;
      } else {
        return boardingItem;
      }
    });
    setBordingInList(updatedBoardings);
    setIsEdit(false);
    setEditID(null);
    navigate("/");
  }

  function updateCheckIn(updatedCheckIn) {
    const updatedCheckIns = checkInList.map((checkInItem) => {
      if (checkInItem.id === updatedCheckIn.id) {
        return updatedCheckIn;
      } else {
        return checkInItem;
      }
    });
    setCheckInList(updatedCheckIns);
    setIsEdit(false);
    setEditID(null);
    navigate("/");
  }

  const removeTestBreakCard = (id) => {
    setbreakInList(breakList.filter((breakItem) => breakItem.id !== id));
  };

  const removeTestBoarding = (id) => {
    setBordingInList(
      boardingInList.filter((boardingItem) => boardingItem.id !== id)
    );
  };

  const removeTestCheckIn = (id) => {
    setCheckInList(checkInList.filter((checkInItem) => checkInItem.id !== id));
  };

  const enableEditMode = (idToEdit) => {
    setIsEdit(true);
    setEditID(idToEdit);
  };

  return (
    <>
      <section>
        <Routes>
          <Route
            path="/checkin"
            element={
              <CheckInPage
                onFormSubmit={addCheckIn}
                isEdit={isEdit}
                editID={editID}
                checkInList={checkInList}
                updateCheckIn={updateCheckIn}
              />
            }
          />
          <Route
            path="/boarding"
            element={
              <BoardingPage
                onFormSubmit={addBoarding}
                isEdit={isEdit}
                editID={editID}
                boardingInList={boardingInList}
                updateBoarding={updateBoarding}
              />
            }
          />
          <Route
            path="/break"
            element={
              <BreakPage
                onFormSubmit={addBreak}
                isEdit={isEdit}
                editID={editID}
                breakList={breakList}
                updateBreak={updateBreak}
              />
            }
          />
          {
            <Route
              path="/"
              element={
                <CardsPage
                  testCheckInList={checkInList}
                  setCheckInList={setCheckInList}
                  testBoardingList={boardingInList}
                  setBordingInList={setBordingInList}
                  testBreakList={breakList}
                  setbreakInList={setbreakInList}
                  removeTestBreakCard={removeTestBreakCard}
                  removeTestBoarding={removeTestBoarding}
                  removeTestCheckIn={removeTestCheckIn}
                  enableEditMode={enableEditMode}
                />
              }
            />
          }
        </Routes>
      </section>

      <Navigation />
    </>
  );
}

export default App;
