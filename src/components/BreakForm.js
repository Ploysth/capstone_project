import React, { useEffect, useState } from "react";
import {
  Form,
  WrapperTime,
  TimeSection,
  ButtonSectionBreak,
} from "../styling/StylingCheckInPage";
import Button from "./Button";
import { nanoid } from "nanoid";

const getLocalStorage = () => {
  let listBreak = localStorage.getItem("listBreak");
  if (listBreak) {
    return JSON.parse(listBreak);
  } else {
    return [];
  }
};

export default function BreakForm({
  onFormSubmit,
  isEdit,
  editID,
  breakList,
  updateBreak,
}) {
  const [inputStartTimeBreak, setInputStartTimeBreak] = useState("");
  const [inputEndTimeBreak, setInputEndTimeBreak] = useState("");
  /*   const [testBreakList, setTestBreakList] = useState(getLocalStorage());
  const [isEditBreak, setIsEditBreak] = useState(false);
  const [editBreakID, setEditBreakID] = useState(null); */

  useEffect(() => {
    if (isEdit) {
      const toEdit = breakList.find((breakItem) => breakItem.id === editID);
      setInputStartTimeBreak(toEdit.startTimeBreak);
      setInputEndTimeBreak(toEdit.endTimeBreak);
    }
  }, [isEdit, editID, breakList]);

  const handleSubmitBreak = (event) => {
    event.preventDefault();
    if (isEdit) {
      const toEdit = breakList.find((breakItem) => breakItem.id === editID);
      updateBreak({
        ...toEdit,
        startTimeBreak: inputStartTimeBreak,
        endTimeBreak: inputEndTimeBreak,
      });
    } else {
      const newBreakItem = {
        id: nanoid(),
        startTimeBreak: inputStartTimeBreak,
        endTimeBreak: inputEndTimeBreak,
      };
      onFormSubmit(newBreakItem);
      setInputStartTimeBreak("");
      setInputEndTimeBreak("");
    }
  };

  /* const removeTestBreakCard = (id) => {
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
  }; */

  // useEffect(() => {
  //   localStorage.setItem("listBreak", JSON.stringify(testBreakList));
  //}, [testBreakList]);
  return (
    <>
      <Form>
        <form onSubmit={handleSubmitBreak}>
          <h3>Add New Break</h3>
          <WrapperTime>
            <TimeSection>
              <label htmlFor="timestart">Start Time</label>
              <input
                type="time"
                className="breakStart"
                value={inputStartTimeBreak}
                required="required"
                onChange={(event) => setInputStartTimeBreak(event.target.value)}
              />
            </TimeSection>

            <TimeSection>
              <label htmlFor="timeend">End Time</label>
              <input
                type="time"
                className="breakEnd"
                required="required"
                value={inputEndTimeBreak}
                onChange={(event) => setInputEndTimeBreak(event.target.value)}
              />
            </TimeSection>
          </WrapperTime>

          <ButtonSectionBreak>
            <Button type="submit" className="submit-btn">
              {isEdit ? "Edit Break" : "Add Break"}
            </Button>
          </ButtonSectionBreak>
        </form>
      </Form>
    </>
  );
}
