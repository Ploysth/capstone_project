import React, { useEffect, useState } from "react";
import {
  Form,
  Wrapper,
  WrapperTime,
  TimeSection,
  ButtonSection,
} from "../styling/StylingCheckInPage";
import Button from "./Button";
import ListCheckIn from "./ListCheckIn";
import { nanoid } from "nanoid";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

export default function CheckInForm() {
  const [inputStartTimeCheckIn, setInputStartTimeCheckIn] = useState("");
  const [inputEndTimeCheckIn, setInputEndTimeCheckIn] = useState("");
  const [inputAirline, setInputAirline] = useState("");
  const [inputFlightNumber, setInputFlightNumber] = useState("");
  const [inputDestination, setInputDestination] = useState("");
  const [inputRegistration, setInputRegistration] = useState("");
  const [inputCheckInCounter, setInputCheckInCounter] = useState("");

  const [testCheckInList, setTestCheckInList] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !inputStartTimeCheckIn &&
      !inputEndTimeCheckIn &&
      !inputAirline &&
      !inputFlightNumber &&
      !inputDestination &&
      !inputRegistration &&
      !inputCheckInCounter
    ) {
    } else if (
      inputStartTimeCheckIn &&
      inputEndTimeCheckIn &&
      inputAirline &&
      inputFlightNumber &&
      inputDestination &&
      inputRegistration &&
      inputCheckInCounter &&
      isEdit
    ) {
      setTestCheckInList(
        testCheckInList.map((checkInItem) => {
          if (checkInItem.id === editID) {
            return {
              ...checkInItem,
              startTimeCheckIn: inputStartTimeCheckIn,
              endTime: inputEndTimeCheckIn,
              airlineCheckIn: inputAirline,
              flightNumberCheckIn: inputFlightNumber,
              destinationCheckIn: inputDestination,
              registrationCheckIn: inputRegistration,
              checkInCounterCheckIn: inputCheckInCounter,
            };
          }
          return checkInItem;
        })
      );
      setInputStartTimeCheckIn("");
      setInputEndTimeCheckIn("");
      setInputAirline("");
      setInputFlightNumber("");
      setInputDestination("");
      setInputRegistration("");
      setInputCheckInCounter("");
      setEditID(null);
      setIsEdit(false);
    } else {
      const newCheckInItem = {
        id: nanoid(),
        startTimeCheckIn: inputStartTimeCheckIn,
        endTimeCheckIn: inputEndTimeCheckIn,
        airlineCheckIn: inputAirline,
        flightNumberCheckIn: inputFlightNumber,
        destinationCheckIn: inputDestination,
        registrationCheckIn: inputRegistration,
        checkInCounterCheckIn: inputCheckInCounter,
      };
      setTestCheckInList([...testCheckInList, newCheckInItem]);
      setInputStartTimeCheckIn("");
      setInputEndTimeCheckIn("");
      setInputAirline("");
      setInputFlightNumber("");
      setInputDestination("");
      setInputRegistration("");
      setInputCheckInCounter("");
    }
  };

  const removeTestCheckInCard = (id) => {
    setTestCheckInList(
      testCheckInList.filter((checkInItem) => checkInItem.id !== id)
    );
  };

  const editCheckInItem = (id) => {
    const specificItemCheckIn = testCheckInList.find(
      (checkInItem) => checkInItem.id === id
    );
    setIsEdit(true);
    setEditID(id);
    setInputStartTimeCheckIn(specificItemCheckIn.startTimeCheckIn);
    setInputEndTimeCheckIn(specificItemCheckIn.endTimeCheckIn);
    setInputAirline(specificItemCheckIn.airlineCheckIn);
    setInputFlightNumber(specificItemCheckIn.flightNumberCheckIn);
    setInputDestination(specificItemCheckIn.destinationCheckIn);
    setInputRegistration(specificItemCheckIn.registrationCheckIn);
    setInputCheckInCounter(specificItemCheckIn.checkInCounterCheckIn);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(testCheckInList));
  }, [testCheckInList]);

  return (
    <>
      <Form>
        <form onSubmit={handleSubmit}>
          <h3>Add New Check In</h3>
          <WrapperTime>
            <TimeSection>
              <label htmlFor="timestart">Start Time</label>
              <input
                type="time"
                className="checkInStart"
                value={inputStartTimeCheckIn}
                required="required"
                onChange={(event) =>
                  setInputStartTimeCheckIn(event.target.value)
                }
              />
            </TimeSection>

            <TimeSection>
              <label htmlFor="timeend">End Time</label>
              <input
                type="time"
                className="checkInEnd"
                value={inputEndTimeCheckIn}
                required="required"
                onChange={(event) => setInputEndTimeCheckIn(event.target.value)}
              />
            </TimeSection>
          </WrapperTime>

          <Wrapper>
            <label htmlFor="airline">Airline</label>
            <input
              type="text"
              className="airline"
              maxLength="2"
              value={inputAirline}
              required="required"
              onChange={(event) => setInputAirline(event.target.value)}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="flightnumber">Flightnumber</label>
            <input
              type="number"
              className="flightNumber"
              value={inputFlightNumber}
              required="required"
              onChange={(event) => setInputFlightNumber(event.target.value)}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              className="destination"
              maxLength="3"
              value={inputDestination}
              required="required"
              onChange={(event) => setInputDestination(event.target.value)}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="registration">Registration</label>
            <input
              type="text"
              className="registration"
              maxLength="5"
              value={inputRegistration}
              required="required"
              onChange={(event) => setInputRegistration(event.target.value)}
            />
          </Wrapper>

          <Wrapper htmlFor="checkinCounter">
            <label>Check In Counter</label>
            <input
              type="text"
              className="checkInCounter"
              value={inputCheckInCounter}
              required="required"
              onChange={(event) => setInputCheckInCounter(event.target.value)}
            />
          </Wrapper>

          <ButtonSection>
            <Button type="submit" className="submit-btn">
              {isEdit ? "Edit Check In" : "Add Check In"}
            </Button>
          </ButtonSection>
        </form>
      </Form>

      <ListCheckIn
        checkInItems={testCheckInList}
        removeTestCheckInCard={removeTestCheckInCard}
        editCheckInItem={editCheckInItem}
      />
    </>
  );
}
