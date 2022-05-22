import React, { useState } from "react";
import {
  Card,
  ToogleCard,
  EditButton,
  DeleteButton,
} from "../styling/StylingCheckInList";
import MySVG from "./MySVG";

export default function ListBoarding({
  boardingItem,
  removeTestBoardingCard,
  editBoardingItem,
}) {
  const [showBoarding, setShowBoarding] = useState(true);
  return (
    <>
      {boardingItem.map((itemBoarding) => {
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
          <>
            <Card
              key={itemBoarding.id}
              onClick={() => setShowBoarding(!showBoarding)}
            >
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
                <div className="edit">
                  <EditButton
                    type="button"
                    className="edit-btn"
                    onClick={() => editBoardingItem(id)}
                  >
                    Edit
                  </EditButton>
                </div>

                <div className="delete-btn">
                  <DeleteButton
                    type="button"
                    className="delete-btn"
                    onClick={() => removeTestBoardingCard(id)}
                  >
                    Delete
                  </DeleteButton>
                </div>
              </ToogleCard>
            ) : null}
          </>
        );
      })}
    </>
  );
}
