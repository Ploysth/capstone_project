import React from 'react'
import Card from './Card';

export default function CardList({ cards }) {
  return (
    <div className='card'>
        {cards.map(checkInCard => {
            return <Card checkInCard={checkInCard} key={checkInCard.id} />
        })}
    
    </div>
  )
}
