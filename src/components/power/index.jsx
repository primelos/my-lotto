import React from "react";
import "./power.styles.scss";
import GameDays from "../game-days";
import { useHistory } from "react-router-dom";
import GameLogic from "../game-logic";

const Power = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="power-container">
      <div className="goback">
        <button onClick={handleClick}>Home</button>
      </div>
      <p className="title">Power Ball</p>
      <GameLogic max={69} maxMega={26} />
      <GameDays
        day0="Monday"
        day1="Wednesday"
        day2="Saturday"
        time="7:00pm"
        url="https://www.calottery.com/draw-games/powerball"
      />
    </div>
  );
};

export default Power;
