import React from "react";
import BoardingCard from "./BoardingCard";

export default function BoardingCardList({ boardingCards }) {
  return (
    <section>
      {boardingCards.map((boardingCard) => {
        return (
          <BoardingCard boardingCard={boardingCard} key={boardingCard.id} />
        );
      })}
    </section>
  );
}
