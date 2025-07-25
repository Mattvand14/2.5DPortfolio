// Tile.jsx
import React from 'react';
import CloudOverlay from './CloudSprite';
import '../GameBoard.css';
import './clouds.css';

function Tile({ row, col, label, isVisible, setPlayerPos, visited }) {

  if (label === "0") return <div className="tile placeholder-tile" />;

  const movePlayer = () => {
    if (!isVisible) return;
    setPlayerPos({ row, col });
  };

  return (
    <div
      id={`tile-${row}-${col}`}
      className={`tile filled-tile ${!isVisible ? 'invisible-tile' : ''}`}
      onClick={movePlayer}
    >
      {isVisible && label}
      <CloudOverlay visited={visited} fps={7} deltaX={0} deltaY={0}/>
      <CloudOverlay visited={visited} fps={5} deltaX={200} deltaY={200}/>
      <CloudOverlay visited={visited} fps={3} deltaX={400} deltaY={400}/>
    </div>
  );
}

export default Tile;
