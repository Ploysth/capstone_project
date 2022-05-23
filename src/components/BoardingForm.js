import React, { useEffect, useState } from "react";
import {
  Form,
  Wrapper,
  WrapperTime,
  TimeSection,
  ButtonSection,
} from "../styling/StylingCheckInPage";
import Button from "./Button";
import ListBoarding from "./ListBoarding";
import { nanoid } from "nanoid";

const getLocalStorage = () => {
  let listBoarding = localStorage.getItem("listBoarding");
  if (listBoarding) {
    return JSON.parse(listBoarding);
  } else {
    return [];
  }
};

export default function BoardingForm() {
  const [inputStartTimeBoarding, setInputStartTimeBoarding] = useState("");
  const [inputEndTimeBoarding, setInputEndTimeBoarding] = useState("");
  const [inputAirlineBoarding, setInputAirlineBoarding] = useState("");
  const [inputFlightNumberBoarding, setInputFlightNumberBoarding] =
    useState("");
  const [inputDestinationBoarding, setInputDestinationBoarding] = useState("");
  const [inputRegistrationBoarding, setInputRegistrationBoarding] =
    useState("");
  const [inputGateBoarding, setInputGateBoarding] = useState("");

  const [testBoardingList, setTestBoardingList] = useState(getLocalStorage());
  const [isEditBoarding, setIsEditBoarding] = useState(false);
  const [editBoardingID, setEditBoardingID] = useState(null);

  const handleSubmitBoarding = (event) => {
    event.preventDefault();
    if (
      !inputStartTimeBoarding &&
      !inputEndTimeBoarding &&
      !inputAirlineBoarding &&
      !inputFlightNumberBoarding &&
      !inputDestinationBoarding &&
      !inputRegistrationBoarding &&
      !inputGateBoarding
    ) {
    } else if (
      inputStartTimeBoarding &&
      inputEndTimeBoarding &&
      inputAirlineBoarding &&
      inputFlightNumberBoarding &&
      inputDestinationBoarding &&
      inputRegistrationBoarding &&
      inputGateBoarding &&
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
              gateBoarding: inputGateBoarding,
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
      setInputGateBoarding("");
      setEditBoardingID(null);
      setIsEditBoarding(false);
    } else {
      const newBoardingItem = {
        id: nanoid(),
        startTimeBoarding: inputStartTimeBoarding,
        endTimeBoarding: inputEndTimeBoarding,
        airlineBoarding: inputAirlineBoarding,
        flightNumberBoarding: inputFlightNumberBoarding,
        destinationBoarding: inputDestinationBoarding,
        registrationBoarding: inputRegistrationBoarding,
        gateBoarding: inputGateBoarding,
      };
      setTestBoardingList([...testBoardingList, newBoardingItem]);
      setInputStartTimeBoarding("");
      setInputEndTimeBoarding("");
      setInputAirlineBoarding("");
      setInputFlightNumberBoarding("");
      setInputDestinationBoarding("");
      setInputRegistrationBoarding("");
      setInputGateBoarding("");
    }
  };

  const removeTestBoardingCard = (id) => {
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
    setInputGateBoarding(specificItemBoarding.gateBoarding);
  };

  useEffect(() => {
    localStorage.setItem("listBoarding", JSON.stringify(testBoardingList));
  }, [testBoardingList]);

  return (
    <>
      <Form>
        <form onSubmit={handleSubmitBoarding}>
          <h3>Add New Boarding</h3>
          <WrapperTime>
            <TimeSection>
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
            </TimeSection>
            <TimeSection>
              <label htmlFor="timeend">End Time</label>
              <input
                type="time"
                className="boardingEnd"
                value={inputEndTimeBoarding}
                required="required"
                onChange={(event) =>
                  setInputEndTimeBoarding(event.target.value)
                }
              />
            </TimeSection>
          </WrapperTime>
          <Wrapper>
            <label htmlFor="airline">Airline</label>
            <input
              type="text"
              className="airline"
              maxLength="2"
              value={inputAirlineBoarding}
              required="required"
              onChange={(event) => setInputAirlineBoarding(event.target.value)}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="flightnumber">Flightnumber</label>
            <input
              type="number"
              className="flightNumber"
              value={inputFlightNumberBoarding}
              required="required"
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
              required="required"
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
              required="required"
              onChange={(event) =>
                setInputRegistrationBoarding(event.target.value)
              }
            />
          </Wrapper>

          <Wrapper htmlFor="gate">
            <label>Gate</label>
            <input
              type="text"
              className="gate"
              value={inputGateBoarding}
              required="required"
              onChange={(event) => setInputGateBoarding(event.target.value)}
            />
          </Wrapper>

          <ButtonSection>
            <Button type="submit" className="submit-btn">
              {isEditBoarding ? "Edit Boarding" : "Add Boarding"}
            </Button>
          </ButtonSection>
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
