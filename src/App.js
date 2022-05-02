import './App.css';
import React, { useState } from 'react';
import CardList from './CardList';

function App() {

  const [cards, setCards] = useState(checkInCard)
  return (

    <>
    <CardList cards={cards} />
    <CardList cards={cards} />
    <CardList cards={cards} />
    <CardList cards={cards} />

    </>
  );
}

const checkInCard = [
  {
    id: 1,
    title: 'Check In',
    timestart: 'Uhrzeit von: 03:50',
    timeend: 'Uhrzeit bis: 04:05',
    airline: 'Airline: XQ',
    flightnumber: 'Flugnummer: 963',
    destination: 'destination: ADB',
    registration: 'Registration: TCSPB',
    checkIn: 'Check-In: 402-403',
      }
];

export default App;
