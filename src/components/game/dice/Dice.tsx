'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function Dice({ quantity, sides }: { quantity: number; sides: number }) {
  const [results, setResults] = useState<number[]>(Array(quantity).fill(1));
  const [rolling, setRolling] = useState(false);

  function rollDice() {
    if (rolling) return;

    setRolling(true);

    let rolls = 0;

    const interval = setInterval(() => {
      const tempResults = Array.from(
        { length: quantity },
        () => Math.floor(Math.random() * sides) + 1
      );

      setResults(tempResults);

      rolls++;

      if (rolls > 10) {
        clearInterval(interval);

        const finalResults = Array.from(
          { length: quantity },
          () => Math.floor(Math.random() * sides) + 1
        );

        setResults(finalResults);
        setRolling(false);
      }
    }, 80); // velocidade da animação
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-3">
        {results.map((value, index) => (
          <div
            key={index}
            className={`w-16 h-16 rounded-md flex items-center justify-center text-2xl font-bold text-white transition-transform duration-150 ${
              rolling
                ? 'bg-amber-700 scale-110 animate-shake shadow-lg shadow-amber-500/50'
                : 'bg-amber-900 scale-100'
            }`}
          >
            {value}
          </div>
        ))}
      </div>

      <Button onClick={rollDice} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </Button>
    </div>
  );
}
