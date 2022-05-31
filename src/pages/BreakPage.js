import React from "react";
import BreakForm from "../components/BreakForm";

export default function BreakPage({
  onFormSubmit,
  isEdit,
  editID,
  breakList,
  updateBreak,
}) {
  return (
    <div>
      <BreakForm
        onFormSubmit={onFormSubmit}
        isEdit={isEdit}
        editID={editID}
        breakList={breakList}
        updateBreak={updateBreak}
      />
    </div>
  );
}
