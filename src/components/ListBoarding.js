import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  ToogleCard,
  EditButton,
  DeleteButton,
} from "../styling/StylingCheckInList";
import MySVG from "./MySVG";

export default function ListBoarding({
  boardingItems,
  removeTestBoardingCard,
  enableEditMode,
}) {
  const [showBoarding, setShowBoarding] = useState(false);
  let navigate = useNavigate();

  function handleEditMode(id) {
    enableEditMode(id);
    navigate("/boarding");
  }

  return (
    <>
      {boardingItems.map((itemBoarding) => {
        const {
          id,
          startTimeBoarding,
          endTimeBoarding,
          airlineBoarding,
          flightNumberBoarding,
          destinationBoarding,
          registrationBoarding,
          gateBoarding,
        } = itemBoarding;
        return (
          <div key={itemBoarding.id}>
            <Card onClick={() => setShowBoarding(!showBoarding)}>
              <div className="section-1">
                <p>{startTimeBoarding}</p>
                <p>{endTimeBoarding}</p>
              </div>
              <div className="section-2">
                <p className="checkin">Boarding</p>
                <p className="flightnumber">
                  {airlineBoarding} {flightNumberBoarding}
                </p>
              </div>

              <div className="section-3">
                <MySVG variant="airplane" size="30px" color="#36436f" />
                <p>{destinationBoarding}</p>
              </div>

              <div className="section-4">
                <p>{registrationBoarding}</p>
                <p>{gateBoarding}</p>
              </div>
            </Card>

            {showBoarding ? (
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
                  onClick={() => removeTestBoardingCard(id)}
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
