import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BreakCard,
  ToogleCard,
  EditButton,
  DeleteButton,
} from "../styling/StylingCheckInList";

export default function ListBreak({
  breakItems,
  removeTestBreakCard,
  enableEditMode,
}) {
  const [showBreak, setShowBreak] = useState(false);
  let navigate = useNavigate();

  function handleEditMode(id) {
    enableEditMode(id);
    navigate("/break");
  }

  return (
    <>
      {breakItems.map((itemBreak) => {
        const { id, startTimeBreak, endTimeBreak } = itemBreak;
        return (
          <div key={itemBreak.id}>
            <BreakCard onClick={() => setShowBreak(!showBreak)}>
              <div className="break-section-time">
                <p>{startTimeBreak}</p>
                <p>{endTimeBreak}</p>
              </div>

              <div className="break-section-title">
                <p className="break">Break</p>
              </div>
            </BreakCard>

            {showBreak ? (
              <ToogleCard className="toogleButton">
                <EditButton
                  type="button"
                  className="edit-btn"
                  onClick={() => handleEditMode(id)}
                >
                  Edit
                </EditButton>
                <DeleteButton
                  type="button"
                  className="delete-btn"
                  onClick={() => removeTestBreakCard(id)}
                >
                  Delete
                </DeleteButton>
              </ToogleCard>
            ) : null}
          </div>
        );
      })}
    </>
  );
}
