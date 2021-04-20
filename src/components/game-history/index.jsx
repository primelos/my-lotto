import React from "react";
import "./game-history.scss";

const GameHistory = ({ show, gameNumbers, showResults }) => {
  console.log("lot", gameNumbers);

  return (
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
  );
};

export default GameHistory;
