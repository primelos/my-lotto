import React, { useState, useEffect } from 'react'
import './lotto.styles.scss'


const Lotto = () => {
  const [num, setNum] = useState([])
  const [mega, setMega] = useState([]);

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
    setNum(prev => prev = test1.lotteryNums)
    console.log(test1.lotteryNums)
    setMega(prev => prev = test1.megaNumber)
  }

  // useEffect(() => {
  //   console.log('in useEffect',num)
    
  // }, [num])


  return (
    <div className="box-container">
      {num.length === 0 ? <p>Let pick them lucky numbers</p> : ""}
      <div className="number-container">
        {num.map((n, i) => (
          <div key={i} className="box-num">
            <p className="win-num">{n}</p>
          </div>
        ))}
        {mega.length === 0 ? '':
        
        <div className="box-num">
          <h3 className="win-num">{mega}</h3>
        </div>
        }
      </div>
      <button onClick={handleNumbers}>New Numbers</button>
    </div>
  );
}

export default Lotto
