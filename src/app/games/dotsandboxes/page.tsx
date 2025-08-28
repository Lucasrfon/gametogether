'use client';
import { useState } from 'react';

type Player = 1 | 2;

export default function DotsAndBoxesBoard() {
  const [size, setSize] = useState<number | null>(null); // começa sem tamanho
  const [lines, setLines] = useState<{ [key: string]: Player }>({});
  const [player, setPlayer] = useState<Player>(1); // true = jogador 1, false = jogador 2

  const handleStart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const chosenSize = Number(formData.get('size'));
    setSize(chosenSize);
  };

  // Se o size ainda não foi escolhido → mostra o formulário
  if (size === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleStart}
          className="bg-gray-700 shadow-lg rounded-2xl p-6 flex flex-col gap-4"
        >
          <label className="font-semibold text-amber-700">
            Escolha o tamanho do tabuleiro:
          </label>
          <input
            type="number"
            name="size"
            min={5}
            max={10}
            defaultValue={5}
            className="border rounded-lg px-3 py-2"
          />
          <button
            type="submit"
            className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800"
          >
            Começar
          </button>
        </form>
      </div>
    );
  }

  // Calcula grid a partir do size escolhido
  const gridSize = size * 2 - 1;

  const putLine = (key: string) => {
    setLines((prev) => ({ ...prev, [key]: player }));
    setPlayer(player === 1 ? 2 : 1); // alterna jogador
  };

  const getLineColor = (key: string) => {
    if (!lines[key]) return 'bg-transparent hover:bg-gray-300';
    return lines[key] === 1 ? 'bg-blue-600' : 'bg-green-600';
  };

  return (
    <div className="flex p-7 items-center justify-center min-h-screen">
      <div
        className="inline-grid gap-2"
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
                  className={`h-1 w-8 cursor-pointer transition-colors place-self-center ${getLineColor(
                    key
                  )}`}
                />
              );
            }

            if (isVertical) {
              return (
                <div
                  key={key}
                  onClick={() => putLine(key)}
                  className={`w-1 h-8 cursor-pointer transition-colors place-self-center ${getLineColor(
                    key
                  )}`}
                />
              );
            }

            return (
              <div
                key={key}
                className="w-8 h-8 flex justify-center items-center"
              ></div>
            );
          })
        )}
      </div>
    </div>
  );
}
