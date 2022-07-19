import React, { useEffect, useState } from "react";
import {
  Form,
  Wrapper,
  WrapperTime,
  TimeSection,
  ButtonSection,
} from "../styling/StylingCheckInPage";
import Button from "./Button";
import { nanoid } from "nanoid";

const getLocalStorage = () => {
  let listBoarding = localStorage.getItem("listBoarding");
  if (listBoarding) {
    return JSON.parse(listBoarding);
  } else {
    return [];
  }
};

export default function BoardingForm({
  onFormSubmit,
  isEdit,
  editID,
  boardingInList,
  updateBoarding,
}) {
  const [inputStartTimeBoarding, setInputStartTimeBoarding] = useState("");
  const [inputEndTimeBoarding, setInputEndTimeBoarding] = useState("");
  const [inputAirlineBoarding, setInputAirlineBoarding] = useState("");
  const [inputFlightNumberBoarding, setInputFlightNumberBoarding] =
    useState("");
  const [inputDestinationBoarding, setInputDestinationBoarding] = useState("");
  const [inputRegistrationBoarding, setInputRegistrationBoarding] =
    useState("");
  const [inputGateBoarding, setInputGateBoarding] = useState("");

  //const [testBoardingList, setTestBoardingList] = useState(getLocalStorage());
  //const [isEditBoarding, setIsEditBoarding] = useState(false);
  //const [editBoardingID, setEditBoardingID] = useState(null);

  useEffect(() => {
    if (isEdit) {
      const toEdit = boardingInList.find(
        (boardingItem) => boardingItem.id === editID
      );
      setInputStartTimeBoarding(toEdit.startTimeBoarding);
      setInputEndTimeBoarding(toEdit.endTimeBoarding);
      setInputAirlineBoarding(toEdit.airlineBoarding);
      setInputFlightNumberBoarding(toEdit.flightNumberBoarding);
      setInputDestinationBoarding(toEdit.destinationBoarding);
      setInputRegistrationBoarding(toEdit.registrationBoarding);
      setInputGateBoarding(toEdit.gateBoarding);
    }
  }, [isEdit, editID, boardingInList]);

  const handleSubmitBoarding = (event) => {
    event.preventDefault();
    if (isEdit) {
      const toEdit = boardingInList.find(
        (boardingItem) => boardingItem.id === editID
      );
      updateBoarding({
        ...toEdit,
        startTimeBoarding: inputStartTimeBoarding,
        endTimeBoarding: inputEndTimeBoarding,
        airlineBoarding: inputAirlineBoarding,
        flightNumberBoarding: inputFlightNumberBoarding,
        destinationBoarding: inputDestinationBoarding,
        registrationBoarding: inputRegistrationBoarding,
        gateBoarding: inputGateBoarding,
      });
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
      onFormSubmit(newBoardingItem);
      setInputStartTimeBoarding("");
      setInputEndTimeBoarding("");
      setInputAirlineBoarding("");
      setInputFlightNumberBoarding("");
      setInputDestinationBoarding("");
      setInputRegistrationBoarding("");
      setInputGateBoarding("");
    }
  };

  //useEffect(() => {
  //localStorage.setItem("listBoarding", JSON.stringify(testBoardingList));
  //}, [testBoardingList]);

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
              {isEdit ? "Edit Boarding" : "Add Boarding"}
            </Button>
          </ButtonSection>
        </form>
      </Form>
    </>
  );
}
