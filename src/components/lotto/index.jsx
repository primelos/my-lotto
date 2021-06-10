import React, { useState } from "react";
import "./lotto.styles.scss";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import GameDays from "../game-days";
import GameHistory from "../game-history";
import { useHistory } from "react-router-dom";

const Lotto = () => {
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
    let fiveNums = [];
    let megaNum = [];

    while (fiveNums.length < 5) {
      let emptyArray = new Uint32Array(1);
      let ranNum = window.crypto.getRandomValues(emptyArray);
      let mixedNum = Math.floor((ranNum * 5) / 100000000);
      if (mixedNum > 0 && mixedNum <= 47 && !fiveNums.includes(mixedNum)) {
        fiveNums.push(mixedNum);
      }
    }
    while (megaNum.length < 1) {
      let emptyArray = new Uint32Array(1);
      let ranNum = window.crypto.getRandomValues(emptyArray);
      let numToPush = Math.floor(ranNum[0] / 100000000);
      if (numToPush > 0 && numToPush <= 27) {
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
  console.log("here", gameNumbers);
  // useEffect(() => {
  //   console.log('in useEffect',num)

  // }, [num])

  return (
    <div className="lotto-container">
      <div className="goback" onClick={handleClick}>
        <button onClick={handleClick}>Home</button>
      </div>

      <p className="title">Super Lotto</p>
      <div className="game-results">
        <div className="five-numbers">
          {num.length === 0 ? "" : <p>Numbers to play</p>}

          <div className="number-container">
            {num.map((n, i) => (
              <div className="box-num">
                <p className="win-num">{n}</p>
              </div>
            ))}
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

      <GameHistory
        show={show}
        gameNumbers={gameNumbers}
        showResults={showResults}
      />
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
