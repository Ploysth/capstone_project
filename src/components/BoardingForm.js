import React, { useState } from "react";
import { Form, Wrapper } from "../styling/StylingCheckInPage";
import Button from "./Button";
import Alert from "./Alert";
import ListBoarding from "./ListBoarding";
import { nanoid } from "nanoid";

export default function BoardingForm() {
  const [inputStartTimeBoarding, setInputStartTimeBoarding] = useState("");
  const [inputEndTimeBoarding, setInputEndTimeBoarding] = useState("");
  const [inputAirlineBoarding, setInputAirlineBoarding] = useState("");
  const [inputFlightNumberBoarding, setInputFlightNumberBoarding] =
    useState("");
  const [inputDestinationBoarding, setInputDestinationBoarding] = useState("");
  const [inputRegistrationBoarding, setInputRegistrationBoarding] =
    useState("");
  const [inputCheckInCounterBoarding, setInputCheckInCounterBoarding] =
    useState("");

  const [testBoardingList, setTestBoardingList] = useState([]);
  const [isEditBoarding, setIsEditBoarding] = useState(false);
  const [editBoardingID, setEditBoardingID] = useState(null);
  const [alertBoarding, setAlertBoarding] = useState({ show: true, msg: "" });

  const handleSubmitBoarding = (event) => {
    event.preventDefault();
    if (
      !inputStartTimeBoarding &&
      !inputEndTimeBoarding &&
      !inputAirlineBoarding &&
      !inputFlightNumberBoarding &&
      !inputDestinationBoarding &&
      !inputRegistrationBoarding &&
      !inputCheckInCounterBoarding
    ) {
      showAlertBoarding(true, "please enter value");
    } else if (
      inputStartTimeBoarding &&
      inputEndTimeBoarding &&
      inputAirlineBoarding &&
      inputFlightNumberBoarding &&
      inputDestinationBoarding &&
      inputRegistrationBoarding &&
      inputCheckInCounterBoarding &&
      isEditBoarding
    ) {
      setTestBoardingList(
        testBoardingList.map((boardingItem) => {
          if (boardingItem.id === editBoardingID) {
            return {
              ...boardingItem,
              startTimeBoarding: inputStartTimeBoarding,
              endTimeBoarding: inputEndTimeBoarding,
              airlineBoarding: inputAirlineBoarding,
              flightNumberBoarding: inputFlightNumberBoarding,
              destinationBoarding: inputDestinationBoarding,
              registrationBoarding: inputRegistrationBoarding,
              checkInCounterBoarding: inputCheckInCounterBoarding,
            };
          }
          return boardingItem;
        })
      );
      setInputStartTimeBoarding("");
      setInputEndTimeBoarding("");
      setInputAirlineBoarding("");
      setInputFlightNumberBoarding("");
      setInputDestinationBoarding("");
      setInputRegistrationBoarding("");
      setInputCheckInCounterBoarding("");
      setEditBoardingID(null);
      setIsEditBoarding(false);
      showAlertBoarding(true, "value changed");
    } else {
      showAlertBoarding(true, "item added to the list");
      const newBoardingItem = {
        id: nanoid(),
        startTimeBoarding: inputStartTimeBoarding,
        endTimeBoarding: inputEndTimeBoarding,
        airlineBoarding: inputAirlineBoarding,
        flightNumberBoarding: inputFlightNumberBoarding,
        destinationBoarding: inputDestinationBoarding,
        registrationBoarding: inputRegistrationBoarding,
        checkInCounterBoarding: inputCheckInCounterBoarding,
      };
      setTestBoardingList([...testBoardingList, newBoardingItem]);
      setInputStartTimeBoarding("");
      setInputEndTimeBoarding("");
      setInputAirlineBoarding("");
      setInputFlightNumberBoarding("");
      setInputDestinationBoarding("");
      setInputRegistrationBoarding("");
      setInputCheckInCounterBoarding("");
    }
  };

  const showAlertBoarding = (show = false, msg = "") => {
    setAlertBoarding({ show, msg });
  };

  const removeTestBoardingCard = (id) => {
    showAlertBoarding(true, "item removed");
    setTestBoardingList(
      testBoardingList.filter((boardingItem) => boardingItem.id !== id)
    );
  };

  const editBoardingItem = (id) => {
    const specificItemBoarding = testBoardingList.find(
      (boardingItem) => boardingItem.id === id
    );
    setIsEditBoarding(true);
    setEditBoardingID(id);
    setInputStartTimeBoarding(specificItemBoarding.startTimeBoarding);
    setInputEndTimeBoarding(specificItemBoarding.endTimeBoarding);
    setInputAirlineBoarding(specificItemBoarding.airlineBoarding);
    setInputFlightNumberBoarding(specificItemBoarding.flightNumberBoarding);
    setInputDestinationBoarding(specificItemBoarding.destinationBoarding);
    setInputRegistrationBoarding(specificItemBoarding.registrationBoarding);
    setInputCheckInCounterBoarding(specificItemBoarding.checkInCounterBoarding);
  };
  return (
    <>
      <Form>
        <form onSubmit={handleSubmitBoarding}>
          {alertBoarding.show && (
            <Alert
              {...alertBoarding}
              removeBoardingAlert={showAlertBoarding}
              testBoardingList={testBoardingList}
            />
          )}
          <h3>Add New Boarding</h3>
          <Wrapper>
            <label htmlFor="timestart">Start Time</label>
            <input
              type="time"
              className="boardingStart"
              value={inputStartTimeBoarding}
              required="required"
              onChange={(event) =>
                setInputStartTimeBoarding(event.target.value)
              }
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="timeend">End Time</label>
            <input
              type="time"
              className="boardingEnd"
              value={inputEndTimeBoarding}
              onChange={(event) => setInputEndTimeBoarding(event.target.value)}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="airline">Airline</label>
            <input
              type="text"
              className="airline"
              maxLength="2"
              value={inputAirlineBoarding}
              onChange={(event) => setInputAirlineBoarding(event.target.value)}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="flightnumber">FlightNumber</label>
            <input
              type="number"
              className="flightNumber"
              value={inputFlightNumberBoarding}
              onChange={(event) =>
                setInputFlightNumberBoarding(event.target.value)
              }
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              className="destination"
              maxLength="3"
              value={inputDestinationBoarding}
              onChange={(event) =>
                setInputDestinationBoarding(event.target.value)
              }
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="registration">Registration</label>
            <input
              type="text"
              className="registration"
              maxLength="5"
              value={inputRegistrationBoarding}
              onChange={(event) =>
                setInputRegistrationBoarding(event.target.value)
              }
            />
          </Wrapper>

          <Wrapper htmlFor="checkinCounter">
            <label>Gate</label>
            <input
              type="text"
              className="gate"
              value={inputCheckInCounterBoarding}
              onChange={(event) =>
                setInputCheckInCounterBoarding(event.target.value)
              }
            />
          </Wrapper>

          <Button type="submit" className="submit-btn">
            {isEditBoarding ? "edit boarding" : "add boarding"}
          </Button>
        </form>
      </Form>

      <ListBoarding
        boardingItem={testBoardingList}
        removeTestBoardingCard={removeTestBoardingCard}
        editBoardingItem={editBoardingItem}
      />
    </>
  );
}
