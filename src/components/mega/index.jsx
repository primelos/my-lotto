import React from "react";
import { useHistory } from "react-router-dom";
import "./mega.styles.scss";
import GameDays from "../game-days";
import GameLogic from "../game-logic";

const Mega = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="mega-container">
      <div className="goback">
        <button onClick={handleClick}>
          <span>Ho</span>
          <span>me</span>
        </button>
      </div>
      <p className="title">
        <span className="p-mega">Mega</span>
        <span className="p-millions">Millions</span>
      </p>
      <GameLogic max={70} maxMega={25} />
      <GameDays
        day1="Tuesday"
        day2="Friday"
        time="7:45pm"
        url="https://www.calottery.com/draw-games/mega-millions"
      />
    </div>
  );
};

export default Mega;
