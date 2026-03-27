import NavLink from '@/components/NavLink';
import { games } from '@/data/games';

export default function Home() {
  return (
    <div className="font-sans flex flex-col justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
          Welcome to <span className="text-[#ac1717]">Game Together</span>
        </h1>

        <ul className="font-roboto text-lg space-y-2 w-full max-w-md">
          {games.map((game) => (
            <NavLink
              key={game.slug}
              href={`/games/${game.slug}`}
              status={game.status}
            >
              {game.name}
            </NavLink>
          ))}
        </ul>
      </main>
    </div>
  );
}
