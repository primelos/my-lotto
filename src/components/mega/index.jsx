import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./mega.styles.scss";
import GameDays from "../game-days";

const Mega = (props) => {
  console.log(props);
  const [num, setNum] = useState([]);
  const [mega, setMega] = useState([]);
  const [gameNumbers, setGameNumbers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  function show() {
    setShowResults(!showResults);
  }

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  function sortNums(a, b) {
    return a - b;
  }

  function lottery() {
    // let lotteryNums = [];
    // let megaNumber = [];

    // while (lotteryNums.length < 5) {
    //   let lotNum = Math.floor(Math.random() * 1000);
    //   if (lotNum > 0 && lotNum <= 70 && !lotteryNums.includes(lotNum)) {
    //     lotteryNums.push(lotNum);
    //   }
    // }
    // while (megaNumber.length < 1) {
    //   let mega = Math.floor(Math.random() * 1000);
    //   if (mega > 0 && mega <= 25) {
    //     megaNumber.push(mega);
    //   }
    // }

    let fiveNums = [];
    let megaNum = [];

    while (fiveNums.length < 5) {
      let emptyArray = new Uint32Array(1);
      let ranNum = window.crypto.getRandomValues(emptyArray);
      let mixedNum = Math.floor((ranNum * 5) / 100000000);
      if (mixedNum > 0 && mixedNum <= 70 && !fiveNums.includes(mixedNum)) {
        fiveNums.push(mixedNum);
      }
    }
    while (megaNum.length < 1) {
      let emptyArray = new Uint32Array(1);
      let ranNum = window.crypto.getRandomValues(emptyArray);
      let numToPush = Math.floor(ranNum[0] / 100000000);
      if (numToPush > 0 && numToPush <= 25) {
        megaNum.push(numToPush);
      }
    }
    return { fiveNums, megaNum };
  }

  function handleNumbers() {
    let pickNumbers = lottery();
    setNum((prev) => (prev = pickNumbers.fiveNums.sort(sortNums)));
    setMega((prev) => (prev = pickNumbers.megaNum));

    setGameNumbers((x) => [...x, [pickNumbers.fiveNums, pickNumbers.megaNum]]);
  }

  return (
    <div className="mega-container">
      <div className="goback" onClick={handleClick}>
        <button onClick={handleClick}>
          <span>Ho</span>
          <span>me</span>
          </button>
      </div>
      <p className="title">
        <span className="p-mega">Mega</span>{" "}
        <span className="p-millions">Millions</span>
      </p>
      <div className="game-results">
        <div className="five-numbers">
          {num.length === 0 ? "" : <p>Numbers to play</p>}

          <div className="number-container">
            {num.map((n, i) => {
              return (
                <div className="box-num" key={i}>
                  <p className="win-num">{n}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mega">
          {num.length === 0 ? "" : <p>Mega</p>}

          {mega.length === 0 ? (
            ""
          ) : (
            <div className="box-num">
              <p className="win-num">{mega}</p>
            </div>
          )}
        </div>
      </div>
      <div className="box-button">
        {num.length < 1 ? (
          <button onClick={handleNumbers}>PLAY</button>
        ) : (
          <button onClick={handleNumbers}>GO AGAIN</button>
        )}
      </div>
      <div className="gameHistory">
        {gameNumbers.length > 1 ? (
          <div className="show-results">
            Show last 10 picks{" "}
            {!showResults ? (
              <i onClick={show} className="fas fa-caret-down"></i>
            ) : (
              <i onClick={show} className="fas fa-caret-up"></i>
            )}
          </div>
        ) : null}
        {showResults
          ? gameNumbers
              .slice(Math.max(gameNumbers.length - 10, 0))
              .map((game, i) => {
                let full = game.slice(0, 1);
                let last = game.slice(1, 2);
                return (
                  <p key={i}>
                    {String(full).split(", ")} <span> {last}</span>
                  </p>
                );
              })
          : null}
      </div>

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
