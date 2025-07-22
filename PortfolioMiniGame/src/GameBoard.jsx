import React, { useState } from 'react';
import './GameBoard.css';
import Tile from './Tile';

function GameBoard() {
  const [playerPos, setPlayerPos] = useState({ row: 2, col: 2 });

  const board = [
    ['0', '0', '0', 'College Swim', '0', '0', '0'],
    ['0', 'Album 1', '0', 'HighSchool Swim', '0', '0', '0'],
    ['Album 2', 'Music Journey', 'start', 'big fork', 'Highschool Journey', 'Academic or Professional', 'Federates'],
    ['0', 'Current Works', '0', 'Coding Projects', '0', 'UNC Comp Sci', '0'],
    ['0', 'This Website', 'Spotify Globe', 'Personal or school', '0', 'Masters', '0'],
    ['0', 'Old Portfolio', '0', 'ROI AI', 'C Shell', 'Android App', '0'],
  ];

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
    <div className="game-board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Tile
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            label={cell}
            isVisible={isVisible(rowIndex, colIndex)}
            setPlayerPos = {setPlayerPos}
          />
        ))
      )}
    </div>
  );
}

export default GameBoard;
