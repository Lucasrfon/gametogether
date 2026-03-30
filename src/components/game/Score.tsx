import React from 'react';

export default function Score({
  player,
  points,
  className,
}: {
  player: string;
  points: number;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center bg-slate-800 rounded-xl shadow-lg ${className} border border-slate-700 px-6 py-4 w-48`}
    >
      <div className="text-lg font-semibold mb-1">{player}</div>
      <div
        className={`text-3xl font-extrabold ${player === 'Player 1' ? 'text-blue-600' : 'text-green-600'}`}
      >
        {points}
      </div>
    </div>
  );
}
