'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

type DiceProps = {
  quantity: number;
  sides: number;
};

export function Dice({ quantity, sides }: DiceProps) {
  const [results, setResults] = useState<number[]>(Array(quantity).fill(1));

  function rollDice() {
    const newResults = Array.from(
      { length: quantity },
      () => Math.floor(Math.random() * sides) + 1
    );

    setResults(newResults);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {results.map((result, index) => (
          <div
            key={index}
            className="w-16 h-16 text-white rounded-md flex items-center justify-center bg-amber-900 text-2xl font-bold"
          >
            {result}
          </div>
        ))}
      </div>

      <Button onClick={rollDice}>Roll Dice</Button>
    </div>
  );
}
