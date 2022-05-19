import React from "react";
import { Form } from "../styling/StylingCheckInPage";

export default function List({
  checkInItems,
  removeTestCheckInCard,
  editCheckInItem,
}) {
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
          <Form>
            <article key={item.id}>
              <p>
                {startTimeCheckIn} - {endTimeCheckIn}
              </p>
              <p>{airlineCheckIn}</p>
              <p>{flightNumberCheckIn}</p>
              <p>{destinationCheckIn}</p>
              <p>{registrationCheckIn}</p>
              <p>{checkInCounterCheckIn}</p>
              <div>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editCheckInItem(id)}
                >
                  edit
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeTestCheckInCard(id)}
                >
                  remove
                </button>
              </div>
            </article>
          </Form>
        );
      })}
    </>
  );
}
