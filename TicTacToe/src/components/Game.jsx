import React, { useState } from 'react'
import Board from './Board'

const Game = () => {
  
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currMove,setCurrMove] = useState(0);
  const currSquare = history[currMove];
  const xTurn = currMove % 2 === 0;
  
  function handlePlay(nextSqaures){
    const nextHistory = [...history.slice(0, currMove + 1),nextSqaures]
    setHistory(nextHistory);
    setCurrMove(nextHistory.length - 1)
  }
  function jumpTo(nextMove){
    setCurrMove(nextMove)
  }
  const moves = history.map((squares,move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className='game'>
      <div className="game-board">
        <Board xTurn={xTurn}  onPlay={handlePlay} squares={currSquare}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game
