import React from "react";
import BoardingForm from "../components/BoardingForm";

export default function BoardingPage({
  onFormSubmit,
  isEdit,
  editID,
  boardingInList,
  updateBoarding,
}) {
  return (
    <div>
      <BoardingForm
        onFormSubmit={onFormSubmit}
        isEdit={isEdit}
        editID={editID}
        boardingInList={boardingInList}
        updateBoarding={updateBoarding}
      />
    </div>
  );
}
