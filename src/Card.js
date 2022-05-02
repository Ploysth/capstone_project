import React from "react";

export default function Card({ checkInCard }) {
  return (
    <div>
      {checkInCard.title}
      {checkInCard.timestart}
      {checkInCard.timeend}
      {checkInCard.airline}
      {checkInCard.flightnumber}
      {checkInCard.destination}
      {checkInCard.registration}
      {checkInCard.checkIn}
    </div>
  );
}
