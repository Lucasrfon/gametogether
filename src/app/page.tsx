import DotsAndBoxes from '@/components/DotsBoxes';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
          Welcome to <span className="text-amber-700">Game Together</span>
        </h1>

        <ul className="font-mono list-inside text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">Chess</li>
          <li className="mb-2 tracking-[-.01em]">Checkers</li>
          <li className="mb-2 tracking-[-.01em]">Mill</li>
          <li className="mb-2 tracking-[-.01em]">Dots and Boxes</li>
        </ul>

        <DotsAndBoxes />
      </main>
    </div>
  );
}
