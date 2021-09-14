import React from "react";
import "./game-day.styles.scss";

const GameDays = ({ day0, day1, day2, time, url }) => {
  return (
    <div className="game-day-box">
      {day0 ? (
        <p>{`Game Days: ${day0}, ${day1} & ${day2},`}</p>
      ) : (
        <p>{`Game Days: ${day1} & ${day2},`}</p>
      )}
      <br />
      <p>{`Play by ${time}`}</p>
      <br />

      <a href={url} target="_blank">
        Check if you won!
      </a>
    </div>
  );
};

export default GameDays;
