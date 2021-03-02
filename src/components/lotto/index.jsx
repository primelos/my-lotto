import React, { useState } from 'react'
import './lotto.styles.scss'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import GameDays from "../game-days";

const Lotto = () => {
  const [num, setNum] = useState([])
  const [mega, setMega] = useState([]);

  function sortNums(a, b) {
    return a - b;
  }

  function lottery() {
    let lotteryNums = [];
    let megaNumber = [];

    while (lotteryNums.length < 5) {
      let lotNum = Math.floor(Math.random() * 1000);
      if (lotNum > 0 && lotNum <= 47 && !lotteryNums.includes(lotNum)) {
        lotteryNums.push(lotNum);
      }
    }
    while (megaNumber.length < 1) {
      let mega = Math.floor(Math.random() * 1000);
      if (mega > 0 && mega <= 27) {
        megaNumber.push(mega);
      }
    }

    return { lotteryNums, megaNumber };
  }


  function handleNumbers(){
    let test1 = lottery()
    setNum(prev => prev = test1.lotteryNums.sort(sortNums))
    console.log(test1.lotteryNums)
    setMega(prev => prev = test1.megaNumber)
  }

  // useEffect(() => {
  //   console.log('in useEffect',num)
    
  // }, [num])


  return (
    <div className="lotto-container">
      {/* <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          // onClick={}
        >
          Open Menu
        </Button>
      </div> */}
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
          <button onClick={handleNumbers}>New Numbers</button>
        ) : (
          <button onClick={handleNumbers}>Get New Set</button>
        )}
      </div>
      <GameDays
        day1="Wednesday"
        day2="Saturday"
        time="7:45pm"
        url='https://www.calottery.com/draw-games/superlotto-plus'
      />
    </div>
  );
}

export default Lotto
