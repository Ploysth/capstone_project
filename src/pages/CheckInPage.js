import React from "react";
import CheckInForm from "../components/CheckInForm";

const CheckInPage = ({
  onFormSubmit,
  isEdit,
  editID,
  checkInList,
  updateCheckIn,
}) => {
  return (
    <div>
      <CheckInForm
        onFormSubmit={onFormSubmit}
        isEdit={isEdit}
        editID={editID}
        checkInList={checkInList}
        updateCheckIn={updateCheckIn}
      />
    </div>
  );
};

export default CheckInPage;
