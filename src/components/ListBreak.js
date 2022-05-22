import React, { useState } from "react";
import {
  BreakCard,
  ToogleCard,
  EditButton,
  DeleteButton,
} from "../styling/StylingCheckInList";

export default function ListBreak({
  breakItem,
  removeTestBreakCard,
  editBreakItem,
}) {
  const [showBreak, setShowBreak] = useState(true);
  return (
    <>
      {breakItem.map((itemBreak) => {
        const { id, startTimeBreak, endTimeBreak } = itemBreak;
        return (
          <>
            <BreakCard
              key={itemBreak.id}
              onClick={() => setShowBreak(!showBreak)}
            >
              <div className="break-section-time">
                <p>{startTimeBreak}</p>
                <p>{endTimeBreak}</p>
              </div>

              <div className="break-section-title">
                <p className="break">Breake</p>
              </div>
            </BreakCard>

            {showBreak ? (
              <ToogleCard className="toogleButton">
                <EditButton
                  type="button"
                  className="edit-btn"
                  onClick={() => editBreakItem(id)}
                >
                  edit
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
          </>
        );
      })}
    </>
  );
}
