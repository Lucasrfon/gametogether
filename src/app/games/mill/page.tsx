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
          className="absolute border-4 border-white inset-0"
          style={{ inset: '12.5%' }}
        ></div>
        <div
          className="absolute border-4 border-white"
          style={{ inset: '25%' }}
        ></div>
      </div>
    </div>
  );
}
