import React from 'react';

export default function BoardingCard({ boardingCard }) {
  return (
    <>
    <div className='boardingCard'>
      <ul>
        <li>{boardingCard.title}</li>
        <li>{boardingCard.timestart}</li>
        <li>{boardingCard.timeend}</li>
        <li>{boardingCard.airline}</li>
        <li>{boardingCard.flightnumber}</li>
        <li>{boardingCard.destination}</li>
        <li>{boardingCard.registration}</li>
        <li>{boardingCard.gate}</li>
      </ul>
    </div>
    </>
  )
}
