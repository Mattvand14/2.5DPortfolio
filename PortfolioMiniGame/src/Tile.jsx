import React from "react";
import './GameBoard.css'

function Tile({ row, col, label, isVisible, setPlayerPos}) {
  const isEmpty = label === '0';

  if (isEmpty) return <div className="tile placeholder-tile" />;

  const movePlayer = () => {
    if (isVisible) {
      setPlayerPos({ row, col });
    }
  };

  return (
    <div
      className={`tile filled-tile ${!isVisible ? 'invisible-tile' : ''}`}
      id={`tile-${row}-${col}`}
      onClick={movePlayer}
    >
      {isVisible ? label : ''}
    </div>
  );
}


export default Tile