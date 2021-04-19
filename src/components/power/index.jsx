import React, { useState } from 'react'
import './power.styles.scss'
import GameDays from "../game-days";
import { useHistory } from "react-router-dom";
import GameHistory from "../game-history";

const Power = () => {
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

 function sortNums(a, b){
  return a-b
 }
 function lottery() {
   let fiveNums = [];
   let megaNum = [];

   while (fiveNums.length < 5) {
    let emptyArray = new Uint32Array(1);
    let ranNum = window.crypto.getRandomValues(emptyArray);
    let mixedNum = Math.floor((ranNum * 5) / 100000000);
    if (mixedNum > 0 && mixedNum <= 69 && !fiveNums.includes(mixedNum)) {
      fiveNums.push(mixedNum);
    }
   }
   while (megaNum.length < 1) {
      let emptyArray = new Uint32Array(1);
      let ranNum = window.crypto.getRandomValues(emptyArray);
      let numToPush = Math.floor(ranNum[0] / 100000000);
      if (numToPush > 0 && numToPush <= 26) {
        megaNum.push(numToPush);
      }
   }
   
   return { fiveNums, megaNum };
 }

 function handleNumbers() {
   let test1 = lottery();
   setNum((prev) => (prev = test1.fiveNums.sort(sortNums)));
   console.log(test1.fiveNums);
   setMega((prev) => (prev = test1.megaNum));
 }

 return (
   <div className="power-container">
     <div className="goback" onClick={handleClick}>
       <button onClick={handleClick}>Home</button>
     </div>
     <p className="title">POWERBALL</p>
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
       time="7:00pm"
       url="https://www.calottery.com/draw-games/powerball"
     />
   </div>
 );
}

export default Power
