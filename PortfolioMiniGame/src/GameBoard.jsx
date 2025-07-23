import React, { useState } from 'react';
import './GameBoard.css';
import './Tiles.css'
import Tile from './Tile';

function GameBoard() {
  const [playerPos, setPlayerPos] = useState({ row: 2, col: 2 });
  const [visited, setVisited] = useState(() => new Set(['2-2']));
  const board = [
    ['0', '0', '0', 'College Swim', '0', '0', '0'],
    ['0', 'Album 1', '0', 'HighSchool Swim', '0', '0', '0'],
    ['Album 2', 'Music Journey', 'start', 'big fork', 'Highschool Journey', 'Academic or Professional', 'Federated'],
    ['0', 'Current Works', '0', 'Coding Projects', '0', 'UNC Comp Sci', '0'],
    ['0', 'This Website', 'Spotify Globe', 'Personal or school', '0', 'Masters', '0'],
    ['0', 'Old Portfolio', '0', 'ROI AI', 'C Shell', 'Android App', '0'],
  ];

  const tileSize = 600;
  const gapSize = 20;
  const totalTileSpace = tileSize + gapSize;
  

  // Calculate offset to center the player's tile
  const offsetX = playerPos.col * totalTileSpace - (600 / 2) + 600;
  const offsetY = playerPos.row * totalTileSpace - (600 / 2) + 600;

  const transform = {
    transform: `translate(-${offsetX}px, -${offsetY}px) rotateX(30deg)`,
  };

  const handleSetPlayerPos = ({row, col}) =>{
    setPlayerPos({row, col});
    setVisited(prev => new Set(prev).add(`${row}-${col}`));
  }

  // Helper to check if a cell is visible
  const isVisible = (r, c) => {
    const { row, col } = playerPos;
    return (
      (r === row && c === col) ||
      (r === row - 1 && c === col) ||
      (r === row + 1 && c === col) ||
      (r === row && c === col - 1) ||
      (r === row && c === col + 1)
    );
  };

  return (
    <div className='board-container'>
      <div className="game-board" style = {transform}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const tileClassName = `tile-${rowIndex}-${colIndex}`;
            const isTileVisited = visited.has(`${rowIndex}-${colIndex}`)
            return (
              <Tile
                key={tileClassName}
                row={rowIndex}
                col={colIndex}
                label={cell}
                isVisible={isVisible(rowIndex, colIndex)}
                setPlayerPos={handleSetPlayerPos}
                visited={isTileVisited}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default GameBoard;
