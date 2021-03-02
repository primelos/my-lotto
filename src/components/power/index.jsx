import React, { useState } from 'react'
import './power.styles.scss'
import GameDays from "../game-days";

const Power = () => {
 const [num, setNum] = useState([]);
 const [mega, setMega] = useState([]);
 function sortNums(a, b){
  return a-b
 }
 function lottery() {
   let lotteryNums = [];
   let megaNumber = [];

   while (lotteryNums.length < 5) {
     let lotNum = Math.floor(Math.random() * 1000);
     if (lotNum > 0 && lotNum <= 69 && !lotteryNums.includes(lotNum)) {
       lotteryNums.push(lotNum);
     }
   }
   while (megaNumber.length < 1) {
     let mega = Math.floor(Math.random() * 1000);
     if (mega > 0 && mega <= 26) {
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
 }

 return (
   <div className="power-container">
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
         <button onClick={handleNumbers}>New Numbers</button>
       ) : (
         <button onClick={handleNumbers}>Get New Set</button>
       )}
     </div>
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
