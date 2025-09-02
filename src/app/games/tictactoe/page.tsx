'use client';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export default function TicTacToeBoard() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState<'X' | 'O'>('X');

  const handleClick = (index: number) => {
    if (board[index]) return; // já marcado
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold mb-8 drop-shadow-lg">Tic Tac Toe</h1>

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
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}
