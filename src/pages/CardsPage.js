import ListCheckIn from "../components/ListCheckIn";
import ListBoarding from "../components/ListBoarding";
import ListBreak from "../components/ListBreak";

export default function CardsPage({
  testCheckInList,
  setCheckInList,
  testBoardingList,
  setBordingInList,
  testBreakList,
  removeTestBreakCard,
  removeTestBoarding,
  removeTestCheckIn,
  enableEditMode,
}) {
  return (
    <section>
      <ListCheckIn
        checkInItems={testCheckInList}
        setCheckInList={setCheckInList}
        removeTestCheckInCard={removeTestCheckIn}
        enableEditMode={enableEditMode}
      />

      <ListBoarding
        boardingItems={testBoardingList}
        setBordingInList={setBordingInList}
        removeTestBoardingCard={removeTestBoarding}
        enableEditMode={enableEditMode}
      />

      <ListBreak
        breakItems={testBreakList}
        removeTestBreakCard={removeTestBreakCard}
        enableEditMode={enableEditMode}
      />
    </section>
  );
}
