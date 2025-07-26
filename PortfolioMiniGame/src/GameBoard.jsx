import React, { useState } from 'react';
import './GameBoard.css';
import './Tiles/Tiles.css'
import Tile from './Tiles/Tile';
import PinkMonsterOverlay from './PinkMonsterOverlay';

function GameBoard() {
  const [playerPos, setPlayerPos] = useState({ row: 2, col: 2 });
  const [visited, setVisited] = useState(() => new Set(['2-2']));
  console.log(visited)
  const board = [
    ['0', '0', '0', 'College Swim', '0', '0', '0'],
    ['0', 'Album 1', '0', 'HighSchool Swim', '0', '0', '0'],
    ['Album 2', 'Music Journey', 'start', 'big fork', 'Highschool Journey', 'Academic or Professional', 'Federated'],
    ['0', 'Current Works', '0', 'Coding Projects', '0', 'UNC Comp Sci', '0'],
    ['0', 'This Website', 'Spotify Globe', 'Personal or school', '0', 'Masters', '0'],
    ['0', 'Old Portfolio', '0', 'ROI AI', 'C Shell', 'Android App', '0'],
  ];

  const containerWidth = 1100;
  const tileWidth = 800;
  const transformFunctionX = ((playerPos.col * tileWidth) - (containerWidth - tileWidth) / 2);

  const angleRad = 30 * Math.PI/180;
  const containerHeight = 900;
  const tileHeight = 800;
  const transformFunctionY = ((playerPos.row * tileHeight) - (containerHeight - tileHeight) / 2);
  const scaledTFY = (transformFunctionY * Math.cos(angleRad)) - 60;

  const transform = {
    transform: `translate(${-transformFunctionX}px, ${-scaledTFY}px) rotateX(30deg)`
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
      <PinkMonsterOverlay playerPos={playerPos} />
      <div className="game-board" style = {transform} >
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
                playerPos={playerPos}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default GameBoard;
