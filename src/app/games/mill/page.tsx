'use client';
import { useState } from 'react';

export default function MillBoard() {
  const [positions, setPositions] = useState<(null | 'X' | 'O')[]>(
    Array(24).fill(null)
  );
  const [player, setPlayer] = useState<'X' | 'O'>('X');

  const handleClick = (i: number) => {
    if (positions[i]) return; // já ocupado
    const newPositions = [...positions];
    newPositions[i] = player;
    setPositions(newPositions);
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  // Coordenadas dos 24 pontos
  const points = [
    // Quadrado externo (8)
    [0, 0],
    [0, 50],
    [0, 100],
    [50, 0],
    [50, 100],
    [100, 0],
    [100, 50],
    [100, 100],

    // Quadrado médio (8)
    [12.5, 12.5],
    [12.5, 50],
    [12.5, 87.5],
    [50, 12.5],
    [50, 87.5],
    [87.5, 12.5],
    [87.5, 50],
    [87.5, 87.5],

    // Quadrado interno (8)
    [25, 25],
    [25, 50],
    [25, 75],
    [50, 25],
    [50, 75],
    [75, 25],
    [75, 50],
    [75, 75],
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6">
      <div className="relative w-[600px] h-[600px] border-4 border-white">
        {/* Quadrados concêntricos */}
        <div className="absolute border-4 border-white inset-0"></div>
        <div
          className="absolute border-4 border-white"
          style={{ inset: '12.5%' }}
        ></div>
        <div
          className="absolute border-4 border-white"
          style={{ inset: '25%' }}
        ></div>

        {/* Linhas de ligação (cantos ↔ cantos e meios ↔ meios) */}
        {/* Horizontal esquerda */}
        <div
          className="absolute border-t-4 border-white"
          style={{ top: '50%', left: '0%', width: '25%' }}
        ></div>
        <div
          className="absolute border-t-4 border-white"
          style={{ top: '50%', left: '75%', width: '25%' }}
        ></div>
        {/* Vertical superior */}
        <div
          className="absolute border-l-4 border-white"
          style={{ left: '50%', top: '0%', height: '25%' }}
        ></div>
        <div
          className="absolute border-l-4 border-white"
          style={{ left: '50%', top: '75%', height: '25%' }}
        ></div>

        {/* 24 pontos */}
        {points.map(([top, left], i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className="absolute w-8 h-8 rounded-full bg-gray-600 hover:bg-red-600 cursor-pointer 
                       flex items-center justify-center text-xl font-bold text-white transition"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {positions[i]}
          </div>
        ))}
      </div>
    </div>
  );
}
