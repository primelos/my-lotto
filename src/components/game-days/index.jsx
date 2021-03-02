import React from 'react'
import './game-day.styles.scss'


const GameDays = ({ day1, day2, time, url }) => {
  return (
    <div className="game-day-box">
      <p>{`Game Days: ${day1} & ${day2},`}</p>
      <br />
      <p>{`Play by ${time}`}</p>
      <br />
      
        <a href={url}>
          Check if you won!
        </a>
    
    </div>
  );
}

export default GameDays
