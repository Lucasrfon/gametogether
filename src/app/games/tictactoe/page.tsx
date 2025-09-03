'use client';
import { Button } from '@/components/ui/Button';
import Score from '@/components/ui/Score';
import { useState } from 'react';

type Player = 1 | 2;

export default function TicTacToeBoard() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState<Player>(1);
  const [points, setPoints] = useState({ 1: 0, 2: 0 });

  const player1Points = points[1];
  const player2Points = points[2];

  function checkwin(newBoard: (Player | null)[]) {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        alert(`Player ${newBoard[a]} wins!`);
        setPoints((prev) => ({
          ...prev,
          [newBoard[a]!]: prev[newBoard[a]!] + 1,
        }));
        setBoard(Array(9).fill(null));
        return;
      }
    }

    if (newBoard.every((cell) => cell !== null)) {
      alert("It's a draw!");
      setBoard(Array(9).fill(null));
    }
  }

  const handleClick = (index: number) => {
    if (board[index]) return; // já marcado
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    checkwin(newBoard);
    setPlayer(player === 1 ? 2 : 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold mb-8 drop-shadow-lg">Tic Tac Toe</h1>

      <div className="flex items-center justify-around min-w-full max-w-3xl px-4 gap-12">
        <Score
          player="Player 1"
          points={player1Points}
          className={player === 1 ? 'shadow-stone-500' : ''}
        ></Score>

        <div className="grid grid-cols-3 gap-3 bg-gray-700 p-4 rounded-2xl shadow-2xl">
          {board.map((cell, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className="w-24 h-24 flex items-center justify-center text-4xl font-bold 
                       bg-gray-900 rounded-xl shadow-md 
                       hover:scale-105 hover:bg-gray-600 transition-all duration-200 
                       cursor-pointer select-none"
            >
              {cell === 1 ? 'X' : cell === 2 ? 'O' : ''}
            </div>
          ))}
        </div>

        <Score
          player="Player 2"
          points={player2Points}
          className={player === 2 ? 'shadow-stone-500' : ''}
        ></Score>
      </div>
    </div>
  );
}
