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
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

export default function CheckInForm({
  onFormSubmit,
  isEdit,
  editID,
  checkInList,
  updateCheckIn,
}) {
  const [inputStartTimeCheckIn, setInputStartTimeCheckIn] = useState("");
  const [inputEndTimeCheckIn, setInputEndTimeCheckIn] = useState("");
  const [inputAirline, setInputAirline] = useState("");
  const [inputFlightNumber, setInputFlightNumber] = useState("");
  const [inputDestination, setInputDestination] = useState("");
  const [inputRegistration, setInputRegistration] = useState("");
  const [inputCheckInCounter, setInputCheckInCounter] = useState("");

  //const [testCheckInList, setTestCheckInList] = useState(getLocalStorage());
  /*   const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null); */

  useEffect(() => {
    if (isEdit) {
      const toEdit = checkInList.find(
        (checkInItem) => checkInItem.id === editID
      );
      setInputStartTimeCheckIn(toEdit.startTimeCheckIn);
      setInputEndTimeCheckIn(toEdit.endTimeCheckIn);
      setInputAirline(toEdit.airlineCheckIn);
      setInputFlightNumber(toEdit.flightNumberCheckIn);
      setInputDestination(toEdit.destinationCheckIn);
      setInputRegistration(toEdit.registrationCheckIn);
      setInputCheckInCounter(toEdit.checkInCounterCheckIn);
    }
  }, [isEdit, editID, checkInList]);

  const handleSubmitCheckIn = (event) => {
    event.preventDefault();
    if (isEdit) {
      const toEdit = checkInList.find(
        (checkInItem) => checkInItem.id === editID
      );
      updateCheckIn({
        ...toEdit,
        startTimeCheckIn: inputStartTimeCheckIn,
        endTimeCheckIn: inputEndTimeCheckIn,
        airlineCheckIn: inputAirline,
        flightNumberCheckIn: inputFlightNumber,
        destinationCheckIn: inputDestination,
        registrationCheckIn: inputRegistration,
        checkInCounterCheckIn: inputCheckInCounter,
      });
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
      onFormSubmit(newCheckInItem);
      setInputStartTimeCheckIn("");
      setInputEndTimeCheckIn("");
      setInputAirline("");
      setInputFlightNumber("");
      setInputDestination("");
      setInputRegistration("");
      setInputCheckInCounter("");
    }
  };

  //useEffect(() => {
  //  localStorage.setItem("list", JSON.stringify(testCheckInList));
  //}, [testCheckInList]);

  return (
    <>
      <Form>
        <form onSubmit={handleSubmitCheckIn}>
          <h3>Add Check In</h3>
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
              value={inputAirline}
              required="required"
              onInput={(event) => {
                setInputAirline(event.target.value);
              }}
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
    </>
  );
}
