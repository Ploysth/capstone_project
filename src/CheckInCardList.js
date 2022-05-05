import React from "react";
import CheckInCard from "./CheckInCard";

export default function CheckInCardList({ cards }) {
  return (
    <div>
      {cards.map((checkInCard) => {
        return <CheckInCard checkInCard={checkInCard} key={checkInCard.id} />;
      })}
    </div>
  );
}
