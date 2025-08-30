'use client';
import { useState } from 'react';

type Player = 1 | 2;

export default function DotsAndBoxesBoard() {
  const [size, setSize] = useState<number | null>(null); // começa sem tamanho
  const [lines, setLines] = useState<{ [key: string]: Player }>({});
  const [player, setPlayer] = useState<Player>(1); // true = jogador 1, false = jogador 2

  function handleStart(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const chosenSize = Number(formData.get('size'));
    setSize(chosenSize);
  }

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
            min={6}
            max={11}
            defaultValue={6}
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

  function checkBoxCompletion(key: string) {
    const row = parseInt(key.split('-')[0]);
    const col = parseInt(key.split('-')[1]);

    // linha horizontal
    if (row % 2 === 0) {
      //quadrado acima
      const top = `${row - 2}-${col}`;
      const topLeft = `${row - 1}-${col - 1}`;
      const topRight = `${row - 1}-${col + 1}`;

      //quadrado abaixo
      const bottom = `${row + 2}-${col}`;
      const bottomLeft = `${row + 1}-${col - 1}`;
      const bottomRight = `${row + 1}-${col + 1}`;

      const topBox = lines[top] && lines[topLeft] && lines[topRight];
      const bottomBox =
        lines[bottom] && lines[bottomLeft] && lines[bottomRight];

      if (topBox || bottomBox) {
        // jogador marca novamente
        console.log('box completed by player', player);
      } else {
        // troca de jogador
        setPlayer(player === 1 ? 2 : 1);
      }
      // linha vertical
    } else {
      //quadrado esquerda
      const left = `${row}-${col - 2}`;
      const leftTop = `${row - 1}-${col - 1}`;
      const leftBottom = `${row + 1}-${col - 1}`;

      //quadrado direita
      const right = `${row}-${col + 2}`;
      const rightTop = `${row - 1}-${col + 1}`;
      const rightBottom = `${row + 1}-${col + 1}`;

      const leftBox = lines[left] && lines[leftTop] && lines[leftBottom];
      const rightBox = lines[right] && lines[rightTop] && lines[rightBottom];

      if (leftBox || rightBox) {
        // jogador marca novamente
        console.log('box completed by player', player);
      } else {
        // troca de jogador
        setPlayer(player === 1 ? 2 : 1);
      }
    }
  }

  function putLine(key: string) {
    if (lines[key]) return; // linha já marcada
    setLines((prev) => ({ ...prev, [key]: player }));
    checkBoxCompletion(key);
  }

  function getLineColor(key: string) {
    if (!lines[key]) return 'bg-transparent hover:bg-gray-300';
    return lines[key] === 1 ? 'bg-blue-600' : 'bg-green-600';
  }

  return (
    <div className="flex p-7 items-center justify-center min-h-screen">
      <div
        className="inline-grid gap-1"
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
