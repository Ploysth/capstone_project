import React from "react";
import BreakCard from "./BreakCard";

export default function BreakCardList({ breakCards }) {
  return (
    <div className="cardList">
      {breakCards.map((breakCard) => {
        return <BreakCard breakCard={breakCard} key={breakCard.id} />;
      })}
    </div>
  );
}
