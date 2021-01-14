import React from 'react'
import './game-day.styles.scss'


const GameDays = ({ day1, day2, time }) => {
  return (
    <div className='game-day-box'>
      <p>{`Game Days: ${day1} & ${day2},`}</p>
      <br/>
      <p>{`Play by ${time}`}</p>
    </div>
  );
}

export default GameDays
