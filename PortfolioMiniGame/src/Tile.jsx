// Tile.jsx
import React from 'react';
import CloudOverlay from './CloudSprite';  // from previous step
import './GameBoard.css';
import './clouds.css';

function Tile({ row, col, label, isVisible, setPlayerPos, visited }) {
  // empty‐tile shortcut
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
      /* only position + overflow in inline style — leave background‑image to your CSS */
      style={{ /* no backgroundImage here! */ }}
    >
      {isVisible && label}
      {/* CloudOverlay will sit on top of your CSS background */}
      <CloudOverlay visited={visited} />
    </div>
  );
}

export default Tile;
