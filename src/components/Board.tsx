export default function DefaultBoard() {
  const size = 8;
  const squares = Array.from({ length: size * size }, (_, i) => i);

  return (
    <div
      className="grid w-96 h-96 border-4 border-black"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
      {squares.map((i) => {
        const row = Math.floor(i / size);
        const col = i % size;
        const isDark = (row + col) % 2 === 1;
        return (
          <div
            key={i}
            className={`w-full h-full ${isDark ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        );
      })}
    </div>
  );
}
