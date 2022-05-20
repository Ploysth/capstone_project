import React from "react";
import { Form } from "../styling/StylingCheckInPage";

export default function ListBoarding({
  boardingItem,
  removeTestBoardingCard,
  editBoardingItem,
}) {
  return (
    <>
      {boardingItem.map((item) => {
        const {
          id,
          startTimeBoarding,
          endTimeBoarding,
          airlineBoarding,
          flightNumberBoarding,
          destinationBoarding,
          registrationBoarding,
          checkInCounterBoarding,
        } = item;
        return (
          <Form>
            <article key={item.id}>
              <p>
                {startTimeBoarding} - {endTimeBoarding}
              </p>
              <p>{airlineBoarding}</p>
              <p>{flightNumberBoarding}</p>
              <p>{destinationBoarding}</p>
              <p>{registrationBoarding}</p>
              <p>{checkInCounterBoarding}</p>
              <div>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editBoardingItem(id)}
                >
                  edit
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeTestBoardingCard(id)}
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
