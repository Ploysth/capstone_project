import React, { useState } from "react";
import MySVG from "./MySVG";
import {
  Card,
  ToogleCard,
  EditButton,
  DeleteButton,
} from "../styling/StylingCheckInList";

export default function ListCheckIn({
  checkInItems,
  removeTestCheckInCard,
  editCheckInItem,
}) {
  const [show, setShow] = useState(true);
  return (
    <>
      {checkInItems.map((item) => {
        const {
          id,
          startTimeCheckIn,
          endTimeCheckIn,
          airlineCheckIn,
          flightNumberCheckIn,
          destinationCheckIn,
          registrationCheckIn,
          checkInCounterCheckIn,
        } = item;
        return (
          <>
            <Card key={item.id} onClick={() => setShow(!show)}>
              <div className="section-1">
                <p>{startTimeCheckIn}</p>

                <p>{endTimeCheckIn}</p>
              </div>

              <div className="section-2">
                <p className="checkin">Check In</p>
                <p className="flightnumber">
                  {airlineCheckIn} {flightNumberCheckIn}
                </p>
              </div>

              <div className="section-3">
                <MySVG variant="airplane" size="30px" color="#36436f" />
                <p>{destinationCheckIn}</p>
              </div>

              <div className="section-4">
                <p>{registrationCheckIn}</p>
                <p>{checkInCounterCheckIn}</p>
              </div>
            </Card>

            {show ? (
              <ToogleCard className="toogleButton">
                <div className="edit">
                  <EditButton
                    type="button"
                    className="edit-btn"
                    onClick={() => editCheckInItem(id)}
                  >
                    Edit
                  </EditButton>
                </div>

                <div className="delete-btn">
                  <DeleteButton
                    type="button"
                    className="delete-btn"
                    onClick={() => removeTestCheckInCard(id)}
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
