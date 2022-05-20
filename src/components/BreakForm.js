import React, { useState } from "react";
import { Form, Wrapper } from "../styling/StylingCheckInPage";
import ListBreak from "./ListBreak";
import Button from "./Button";
import Alert from "./Alert";
import { nanoid } from "nanoid";

export default function BreakForm() {
  const [inputStartTimeBreak, setInputStartTimeBreak] = useState("");
  const [inputEndTimeBreak, setInputEndTimeBreak] = useState("");

  const [testBreakList, setTestBreakList] = useState([]);
  const [isEditBreak, setIsEditBreak] = useState(false);
  const [editBreakID, setEditBreakID] = useState(null);
  const [alertBreak, setAlertBreak] = useState({ show: true, msg: "" });

  const handleSubmitBreak = (event) => {
    event.preventDefault();
    if (!inputStartTimeBreak && !inputEndTimeBreak) {
      showAlertBreak(true, "please enter value");
    } else if (inputStartTimeBreak && inputEndTimeBreak && isEditBreak) {
      setTestBreakList(
        testBreakList.map((breakItem) => {
          if (breakItem.id === editBreakID) {
            return {
              ...breakItem,
              startTimeBreak: inputStartTimeBreak,
              endTimeBreak: inputEndTimeBreak,
            };
          }
          return breakItem;
        })
      );
      setInputStartTimeBreak("");
      setInputEndTimeBreak("");
      setEditBreakID(null);
      setIsEditBreak(false);
      showAlertBreak(true, "value changed");
    } else {
      showAlertBreak(true, "item added to the list");
      const newBreakItem = {
        id: nanoid(),
        startTimeBreak: inputStartTimeBreak,
        endTimeBreak: inputEndTimeBreak,
      };
      setTestBreakList([...testBreakList, newBreakItem]);
      setInputStartTimeBreak("");
      setInputEndTimeBreak("");
    }
  };

  const showAlertBreak = (show = false, msg = "") => {
    setAlertBreak({ show, msg });
  };

  const removeTestBreakCard = (id) => {
    showAlertBreak(true, "item removed");
    setTestBreakList(testBreakList.filter((breakItem) => breakItem.id !== id));
  };

  const editBreakItem = (id) => {
    const specificItemBreak = testBreakList.find(
      (breakItem) => breakItem.id === id
    );
    setIsEditBreak(true);
    setEditBreakID(id);
    setInputStartTimeBreak(specificItemBreak.startTimeBreak);
    setInputEndTimeBreak(specificItemBreak.endTimeBreak);
  };
  return (
    <>
      <Form>
        <form onSubmit={handleSubmitBreak}>
          {alertBreak.show && (
            <Alert
              {...alertBreak}
              removeBreakAlert={showAlertBreak}
              testBreakList={testBreakList}
            />
          )}
          <h3>Add New Break</h3>
          <Wrapper>
            <label htmlFor="timestart">Start Time</label>
            <input
              type="time"
              className="checkInStart"
              value={inputStartTimeBreak}
              required="required"
              onChange={(event) => setInputStartTimeBreak(event.target.value)}
            />
          </Wrapper>

          <Wrapper>
            <label htmlFor="timeend">End Time</label>
            <input
              type="time"
              className="checkInEnd"
              value={inputEndTimeBreak}
              onChange={(event) => setInputEndTimeBreak(event.target.value)}
            />
          </Wrapper>

          <Button type="submit" className="submit-btn">
            {isEditBreak ? "edit check in" : "add check in"}
          </Button>
        </form>
      </Form>

      <ListBreak
        breakItem={testBreakList}
        removeTestBreakCard={removeTestBreakCard}
        editBreakItem={editBreakItem}
      />
    </>
  );
}
