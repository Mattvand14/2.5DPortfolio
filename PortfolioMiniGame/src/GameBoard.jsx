import React, { useState } from 'react';
import './GameBoard.css';

function GameBoard () {
    // 1 = start 
    // 2 = music journey fork, 3 = album 1, 4 = album 2, 5 = current works
    // 6 = swim/academics/projects route fork
    // 7 = HS swim, 8 = college swim
    // 9 = highschool/journey, 10 = academics/professional fork, 11 = federated
    // 12 = unc comp sci, 13 = masters?
    // 14 = codings projects, 15 = personal/school fork
    // 16 = spotify thing, 17 = this website, 18 =old portfolio
    // 19 = ROI AI for busi, 20 = C shell in linux, 21 = android story teller ai thing

    const[board] = useState([
        ['0', '0', '0', '8', '0', '0', '0'],
        ['0', '3', '0', '7', '0', '0', '0'],
        ['4', '2', '1', '6', '9', '10', '11'],
        ['0', '5', '0', '14', '0', '12', '0'],
        ['0', '17', '16', '15', '0', '13', '0'],
        ['0', '18', '0', '19', '20', '21', '0'],
    ]);
    return(mapBoardCells(board))
}

function mapBoardCells(board) {

    return (
        <div className="game-board">
        {board.map((row, rowIndex) => (
            <div key={rowIndex} className="board-row">
            {row.map((cell, colIndex) => {
                const isEmpty = cell === '0';
                return (
                <div
                    key={colIndex}
                    className={`tile ${isEmpty ? 'empty-tile' : 'filled-tile'}`}
                    id={`tile-${rowIndex}-${colIndex}`}
                >
                    {!isEmpty && cell}
                </div>
                );
            })}
            </div>
        ))}
        </div>
    );

}

export default GameBoard


