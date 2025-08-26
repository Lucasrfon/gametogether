'use client';
import { useState } from 'react';

export default function DotsAndBoxesBoard() {
  const size = 3; // 4x4 pontos → 3x3 quadrados
  const gridSize = size * 2 - 1; // tamanho da grade incluindo pontos e linhas
  const [lines, setLines] = useState<{ [key: string]: boolean }>({});

  const putLine = (key: string) => {
    setLines((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div
      className="inline-grid"
      style={{ gridTemplateColumns: `repeat(${gridSize}, auto)` }}
    >
      {Array.from({ length: gridSize }).map((_, row) =>
        Array.from({ length: gridSize }).map((_, col) => {
          const isDot = row % 2 === 0 && col % 2 === 0;
          const isHorizontal = row % 2 === 0 && col % 2 === 1;
          const isVertical = row % 2 === 1 && col % 2 === 0;

          const key = `${row}-${col}`;

          if (isDot) {
            return (
              <div
                key={key}
                className="w-2 h-2 bg-black rounded-full place-self-center"
              />
            );
          }

          if (isHorizontal) {
            return (
              <div
                key={key}
                onClick={() => putLine(key)}
                className={`h-1 w-8 cursor-pointer transition-colors place-self-center ${
                  lines[key]
                    ? 'bg-blue-600'
                    : 'bg-transparent hover:bg-blue-300'
                }`}
              />
            );
          }

          if (isVertical) {
            return (
              <div
                key={key}
                onClick={() => putLine(key)}
                className={`w-1 h-8 cursor-pointer transition-colors place-self-center ${
                  lines[key]
                    ? 'bg-blue-600'
                    : 'bg-transparent hover:bg-blue-300'
                }`}
              />
            );
          }

          return (
            <div
              key={key}
              className="w-8 h-8 flex justify-center items-center"
            ></div>
          ); // espaço vazio (células centrais dos quadrados)
        })
      )}
    </div>
  );
}
