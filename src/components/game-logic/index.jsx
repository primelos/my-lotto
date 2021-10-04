import React, { useState } from "react";
import GameHistory from "../game-history";

const GameLogic = ({ max, maxMega }) => {
  const [num, setNum] = useState([]);
  const [mega, setMega] = useState([]);
  const [gameNumbers, setGameNumbers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  function show() {
    setShowResults(!showResults);
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
      if (mixedNum > 0 && mixedNum <= max && !fiveNums.includes(mixedNum)) {
        fiveNums.push(mixedNum);
      }
    }
    while (megaNum.length < 1) {
      let emptyArray = new Uint32Array(1);
      let ranNum = window.crypto.getRandomValues(emptyArray);
      let numToPush = Math.floor(ranNum[0] / 100000000);
      if (numToPush > 0 && numToPush <= maxMega) {
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
    <>
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
      <GameHistory
        show={show}
        gameNumbers={gameNumbers}
        showResults={showResults}
      />
    </>
  );
};

export default GameLogic;
{
}
