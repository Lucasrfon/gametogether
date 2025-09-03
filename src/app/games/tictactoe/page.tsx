'use client';
import { Button } from '@/components/ui/Button';
import Score from '@/components/ui/Score';
import { useState } from 'react';

type Player = 1 | 2;
type Result = 'Player 1 wins' | 'Player 2 wins' | 'Draw' | null;

export default function TicTacToeBoard() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState<Player>(1);
  const [points, setPoints] = useState({ 1: 0, 2: 0 });
  const [result, setResult] = useState<Result>(null);

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
        setPoints((prev) => ({
          ...prev,
          [newBoard[a]!]: prev[newBoard[a]!] + 1,
        }));

        setResult(newBoard[a] === 1 ? 'Player 1 wins' : 'Player 2 wins');
        return;
      }
    }

    if (newBoard.every((cell) => cell !== null)) {
      setResult('Draw');
      return;
    }
  }

  function handleClick(index: number) {
    if (board[index]) return; // já marcado
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    checkwin(newBoard);
    setPlayer(player === 1 ? 2 : 1);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold mb-8">Tic Tac Toe</h1>

      <div className="flex items-center justify-around min-w-full max-w-3xl px-4 gap-12">
        <Score
          player="Player 1"
          points={player1Points}
          className={player === 1 ? 'shadow-stone-500' : ''}
        ></Score>

        <div className="grid grid-cols-3 gap-3 bg-gray-700 p-4 rounded-2xl">
          {board.map((cell, i) => (
            <button
              key={i}
              disabled={!!result}
              onClick={() => handleClick(i)}
              className={`w-24 h-24 flex items-center justify-center text-4xl font-bold 
              bg-gray-900 rounded-xl 
              transition-all duration-200 select-none 
              ${!!result ? 'opacity-50' : 'cursor-pointer hover:scale-105 hover:bg-gray-600'}`}
            >
              {cell === 1 ? 'X' : cell === 2 ? 'O' : ''}
            </button>
          ))}
        </div>

        <Score
          player="Player 2"
          points={player2Points}
          className={player === 2 ? 'shadow-stone-500' : ''}
        ></Score>
      </div>

      <div
        className={`transition-all min-h-22 duration-300 text-center ${
          result ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">{result}</h2>
        <Button
          onClick={() => {
            setBoard(Array(9).fill(null));
            setResult(null);
          }}
        >
          Play Again
        </Button>
      </div>
    </div>
  );
}
