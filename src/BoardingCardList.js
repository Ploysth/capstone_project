import React from 'react'
import BoardingCard from './BoardingCard';

export default function BoardingCardList( { boardingCards }) {
  return (
    <div className='card'>
    {boardingCards.map(boardingCard => {
        return <BoardingCard boardingCard={boardingCard} key={boardingCard.id} />
    })}
    </div>
  )
}
