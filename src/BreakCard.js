import React from 'react'

export default function BreakCard({ breakCard }) {
  return (
    <div className="card">
      <ul className="task-card">
        <li>{breakCard.title}</li>
        <li>Uhrzeit von: {breakCard.timestart}</li>
        <li>Uhrzeit bis: {breakCard.timeend}</li>
      </ul>
    </div>
  )
}
