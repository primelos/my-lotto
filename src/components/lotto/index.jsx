import React from "react";
import "./lotto.styles.scss";
import GameDays from "../game-days";
import { useHistory } from "react-router-dom";
import GameLogic from "../game-logic";

const Lotto = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="lotto-container">
      <div className="goback" onClick={handleClick}>
        <button onClick={handleClick}>Home</button>
      </div>
      <p className="title">Super Lotto</p>
      <GameLogic max={47} maxMega={27} />
      <GameDays
        day1="Wednesday"
        day2="Saturday"
        time="7:45pm"
        url="https://www.calottery.com/draw-games/superlotto-plus"
      />
    </div>
  );
};

export default Lotto;
