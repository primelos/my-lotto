import React, { useState, useEffect } from "react";
import "./randomGame.styles.scss";
import { useHistory } from "react-router-dom";
import GameLogic from "../game-logic";

const RandomGame = () => {
  const [numbersNeeded, setNumbersNeeded] = useState(5);
  const [megaNeeded, setMegaNeeded] = useState("no");
  const [max, setMax] = useState(99);
  const [maxMega, setMaxMega] = useState(99);

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  useEffect(() => {}, [megaNeeded]);
  const handleMegaChange = (e) => {
    setMegaNeeded(e.target.value);
    if (megaNeeded === "no") {
      setMaxMega(99);
    }
  };

  return (
    <div className="random-container">
      <div className="goback">
        <button onClick={handleClick}>Home</button>
      </div>

      <p className="title">Random Numbers</p>
      <div className="selection-container">
        <div className="selection">
          <form className="form-container">
            <label>Select how many random numbers</label>
            <select
              className="select-container"
              value={numbersNeeded}
              onChange={(e) => setNumbersNeeded(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <label>Max number to play</label>
            <input
              className="number-input"
              type="text"
              placeholder="Default 99..."
              onChange={(e) => setMax(e.target.value)}
            />
            <br />
            <label>Mega</label>
            <select
              className="select-mega"
              value={megaNeeded}
              onChange={handleMegaChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {megaNeeded === "no" ? null : (
              <>
                <label>Max mega to play</label>
                <input
                  className="number-input"
                  type="text"
                  placeholder="Default 99..."
                  onChange={(e) => setMaxMega(e.target.value)}
                />
              </>
            )}
          </form>
        </div>
        <GameLogic
          max={max}
          maxMega={maxMega}
          megaNeeded={megaNeeded}
          numbersNeeded={numbersNeeded}
        />
      </div>
    </div>
  );
};

export default RandomGame;
