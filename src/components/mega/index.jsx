import React, { useState } from 'react'
import './mega.styles.scss'
import GameDays from '../game-days'

const Mega = () => {
  const [num, setNum] = useState([]);
  const [mega, setMega] = useState([]);
  const [gameNumbers, setGameNumbers] = useState([])
  const [showResults, setShowResults] = useState(false)

  function show() {
    setShowResults(!showResults)
  }
  
  function sortNums(a, b) {
    return a - b;
  }

  function lottery() {
    let lotteryNums = [];
    let megaNumber = [];

    while (lotteryNums.length < 5) {
      let lotNum = Math.floor(Math.random() * 1000);
      if (lotNum > 0 && lotNum <= 70 && !lotteryNums.includes(lotNum)) {
        lotteryNums.push(lotNum);
      }
    }
    while (megaNumber.length < 1) {
      let mega = Math.floor(Math.random() * 1000);
      if (mega > 0 && mega <= 25) {
        megaNumber.push(mega);
      }
    }

    return { lotteryNums, megaNumber };
  }

  function handleNumbers() {
    let test1 = lottery();
    setNum((prev) => (prev = test1.lotteryNums.sort(sortNums)));
    console.log(test1.lotteryNums);
    setMega((prev) => (prev = test1.megaNumber));

    setGameNumbers(x => [...x, [test1.lotteryNums, test1.megaNumber]]);
  }

  return (
    <div className="mega-container">
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
          <button onClick={handleNumbers}>New Numbers</button>
        ) : (
          <button onClick={handleNumbers}>Get New Set</button>
        )}
      </div>
      <div className="gameHistory">
        <div className='show-results' onClick={show}>
          Show last 10 picks
        </div>
        { showResults ? gameNumbers
          .slice(Math.max(gameNumbers.length - 10, 0))
          .map((game, i) => {
            let full = game.slice(0, 1);
            let last = game.slice(1, 2);
            return (
              <p>
                {String(full).split(", ")} <span> {last}</span>
              </p>
            );
          }) : null}
      </div>

      <GameDays
        day1="Tuesday"
        day2="Friday"
        time="7:45pm"
        url="https://www.calottery.com/draw-games/mega-millions"
      />
    </div>
  );
}

export default Mega
