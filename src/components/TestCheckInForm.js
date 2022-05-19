import React, { useState } from "react";
import { Form, Wrapper } from "../styling/StylingCheckInPage";
import Button from "../components/Button";
import Alert from "./Alert";
import TestListCheckIn from "./TestListCheckIn";
import { nanoid } from "nanoid";

export default function TestCheckInForm() {
  const [inputStartTimeCheckIn, setInputStartTimeCheckIn] = useState("");
  const [inputEndTimeCheckIn, setInputEndTimeCheckIn] = useState("");
  const [inputAirline, setInputAirline] = useState("");
  const [inputFlightNumber, setInputFlightNumber] = useState("");
  const [inputDestination, setInputDestination] = useState("");
  const [inputRegistration, setInputRegistration] = useState("");
  const [inputCheckInCounter, setInputCheckInCounter] = useState("");

  const [testCheckInList, setTestCheckInList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: "" });

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
      showAlert(true, "please enter value");
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
      showAlert(true, "value changed");
    } else {
      showAlert(true, "item added to the list");
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

  const showAlert = (show = false, msg = "") => {
    setAlert({ show, msg });
  };

  const removeTestCheckInCard = (id) => {
    showAlert(true, "item removed");
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

  return (
    <>
      <Form>
        <form onSubmit={handleSubmit}>
          {alert.show && (
            <Alert
              {...alert}
              removeAlert={showAlert}
              testCheckInList={testCheckInList}
            />
          )}
          <h3>Add New Check In</h3>
          <Wrapper>
            <label htmlFor="timestart">Start Time</label>
            <input
              type="time"
              className="checkInStart"
              value={inputStartTimeCheckIn}
              required="required"
              onChange={(event) => setInputStartTimeCheckIn(event.target.value)}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="timeend">End Time</label>
            <input
              type="time"
              className="checkInEnd"
              value={inputEndTimeCheckIn}
              onChange={(event) => setInputEndTimeCheckIn(event.target.value)}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="airline">Airline</label>
            <input
              type="text"
              className="airline"
              maxLength="2"
              value={inputAirline}
              onChange={(event) => setInputAirline(event.target.value)}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="flightnumber">FlightNumber</label>
            <input
              type="number"
              className="flightNumber"
              value={inputFlightNumber}
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
              onChange={(event) => setInputRegistration(event.target.value)}
            />
          </Wrapper>

          <Wrapper htmlFor="checkinCounter">
            <label>Check In Counter</label>
            <input
              type="text"
              className="checkInCounter"
              value={inputCheckInCounter}
              onChange={(event) => setInputCheckInCounter(event.target.value)}
            />
          </Wrapper>

          <Button type="submit" className="submit-btn">
            {isEdit ? "edit check in" : "add check in"}
          </Button>
        </form>
      </Form>

      <TestListCheckIn
        checkInItems={testCheckInList}
        removeTestCheckInCard={removeTestCheckInCard}
        editCheckInItem={editCheckInItem}
      />
    </>
  );
}
