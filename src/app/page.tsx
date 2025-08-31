import NavLink from '@/components/NavLink';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] bg-gradient-to-br from-gray-950 via-gray-900 to-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
          Welcome to <span className="text-[#ac1717]">Game Together</span>
        </h1>

        <ul className="font-roboto list-inside text-lg text-center sm:text-left space-y-2">
          <NavLink href={'/games/chess'} status="Soon">
            Chess
          </NavLink>
          <NavLink href={'/games/checkers'} status="Soon">
            Checkers
          </NavLink>
          <NavLink href={'/games/mill'} status="Soon">
            Mill
          </NavLink>
          <NavLink href={'/games/dotsandboxes'} status="Done">
            Dots and Boxes
          </NavLink>
          <NavLink href={'/games/tictactoe'} status="In Progress">
            Tic Tac Toe
          </NavLink>
          <NavLink href={'/games/connectfour'} status="Soon">
            Connect Four
          </NavLink>
        </ul>
      </main>
    </div>
  );
}
