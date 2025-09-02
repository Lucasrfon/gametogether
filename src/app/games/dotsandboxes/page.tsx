'use client';
import { Button } from '@/components/ui/Button';
import Score from '@/components/ui/Score';
import { useState } from 'react';

type Player = 1 | 2;

export default function DotsAndBoxesBoard() {
  const [size, setSize] = useState<number | null>(null); // começa sem tamanho
  const [lines, setLines] = useState<{ [key: string]: Player }>({});
  const [boxes, setBoxes] = useState<{ [key: string]: Player }>({});
  const [player, setPlayer] = useState<Player>(1);

  const player1Points = Object.values(boxes).filter(
    (player) => player === 1
  ).length;
  const player2Points = Object.values(boxes).filter(
    (player) => player === 2
  ).length;

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
          className="bg-gray-700 shadow-lg rounded-2xl p-6 flex flex-col justify-center items-center gap-4"
        >
          <label className="font-semibold">
            Choose board size{' '}
            <span className="text-amber-700">(5x5 to 10x10)</span>:
          </label>
          <input
            type="number"
            name="size"
            min={5}
            max={10}
            defaultValue={5}
            className="border rounded-lg w-full px-3 py-2"
          />
          <Button type="submit" className="bg-amber-700">
            Start
          </Button>
        </form>
      </div>
    );
  }

  if (player1Points + player2Points === size * size) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6">
        <h1 className="text-4xl font-bold text-amber-700">Game Over!</h1>
        <p className="text-xl">
          {player1Points > player2Points
            ? 'Player 1 won!'
            : player2Points > player1Points
              ? 'Player 2 won!'
              : 'Empate!'}
        </p>
        <p className="text-lg">
          Player 1:{' '}
          <span className="text-blue-600"> {player1Points} boxes </span> |
          Player 2:{' '}
          <span className="text-green-600"> {player2Points} boxes </span>
        </p>
        <Button
          onClick={() => {
            setSize(null);
            setLines({});
            setBoxes({});
            setPlayer(1);
          }}
          className="bg-amber-700"
        >
          Play Again?
        </Button>
      </div>
    );
  }

  // Calcula grid a partir do size escolhido
  const gridSize = size * 2 + 1;

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
        setBoxes((prev) => ({
          ...prev,
          ...(topBox ? { [`${row - 1}-${col}`]: player } : {}),
          ...(bottomBox ? { [`${row + 1}-${col}`]: player } : {}),
        }));
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
        setBoxes((prev) => ({
          ...prev,
          ...(leftBox ? { [`${row}-${col - 1}`]: player } : {}),
          ...(rightBox ? { [`${row}-${col + 1}`]: player } : {}),
        }));
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
    if (!lines[key])
      return player === 1
        ? 'bg-transparent hover:bg-blue-400'
        : 'bg-transparent hover:bg-green-400';
    return lines[key] === 1 ? 'bg-blue-600' : 'bg-green-600';
  }

  function getBoxColor(key: string) {
    if (!boxes[key]) return 'bg-transparent';
    return boxes[key] === 1 ? 'bg-blue-700' : 'bg-green-700';
  }

  return (
    <div className="flex items-center justify-around min-h-screen">
      <Score
        player="Player 1"
        points={player1Points}
        className={player === 1 ? 'shadow-stone-500' : ''}
      ></Score>

      <div
        className="inline-grid h-[750px] w-[750px]"
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
                  className="w-4 h-4 bg-white rounded-full place-self-center"
                />
              );
            }

            if (isHorizontal) {
              return (
                <div
                  key={key}
                  onClick={() => putLine(key)}
                  className={`h-3 w-full cursor-pointer transition-colors place-self-center ${getLineColor(
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
                  className={`w-3 h-full cursor-pointer transition-colors place-self-center ${getLineColor(
                    key
                  )}`}
                />
              );
            }

            return (
              <div
                key={key}
                className="w-full h-full flex justify-center items-center"
              >
                <div className={`w-10 h-10 rounded-full ${getBoxColor(key)}`} />
              </div>
            );
          })
        )}
      </div>

      <Score
        player="Player 2"
        points={player2Points}
        className={player === 2 ? 'shadow-stone-500' : ''}
      ></Score>
    </div>
  );
}
