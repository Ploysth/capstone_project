import React from "react";
import CheckInCardList from "../CheckInCardList";
import BoardingCardList from "../BoardingCardList";
import BreakCardList from "../BreakCardList";

export default function CardsPage({
  cards,
  setCards,
  boardingCards,
  setboardingCards,
  breakCards,
  setbreakCards,
}) {
  return (
    <section>
      <CheckInCardList cards={cards} setCards={setCards} />
      <BoardingCardList
        boardingCards={boardingCards}
        setboardingCards={setboardingCards}
      />
      <BreakCardList breakCards={breakCards} setbreakCards={setbreakCards} />
    </section>
  );
}
