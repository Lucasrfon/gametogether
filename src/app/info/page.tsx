export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 px-8">
      <div className="max-w-3xl w-full text-center space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            About the Project ♟️
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Where strategy meets fun — no ads, no distractions.
          </p>
        </header>

        {/* Main text */}
        <section className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            I’ve always been fascinated by games — not only digital ones, but
            also board games, where every move carries{' '}
            <span className="text-yellow-400">strategy</span>,{' '}
            <span className="text-red-400">skill</span>, and sometimes even a
            touch of <span className="text-green-400">psychology</span>.
          </p>

          <p>
            Nowadays, it’s hard to find a place to enjoy{' '}
            <strong>local multiplayer</strong> in a simple and direct way,
            without ads or endless menus. That’s why I created this project: a
            space dedicated to classics.
          </p>

          <p>
            The idea is to bring back the essence of{' '}
            <span className="text-indigo-400">table games</span> and shared fun
            — that dining table turned battlefield feeling, just like epic{' '}
            <span className="text-pink-400">War</span> matches lasting until
            dawn.
          </p>

          <p>
            And this is only the beginning: in the future, I’d like to expand to
            games for more players, more complex boards, championships and even
            more. Because in the world of games,{' '}
            <span className="italic text-gray-400">
              the sky’s the limit, and the next move can always change the game.
            </span>
          </p>

          <p className="italic text-gray-400">
            “Rolling the dice is easy. The real question is whether you’re ready
            for the adventure.” ⚔️
          </p>
        </section>

        {/* Footer */}
        <footer>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Lucas Fonseca — Player 1 Start
          </p>
        </footer>
      </div>
    </div>
  );
}
