import React from "react";
import { Form } from "../styling/StylingCheckInPage";

export default function ListBreak({
  breakItem,
  removeTestBreakCard,
  editBreakItem,
}) {
  return (
    <>
      {breakItem.map((item) => {
        const { id, startTimeBreak, endTimeBreak } = item;
        return (
          <Form>
            <article key={item.id}>
              <p>
                {startTimeBreak} - {endTimeBreak}
              </p>
              <div>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editBreakItem(id)}
                >
                  edit
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeTestBreakCard(id)}
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
