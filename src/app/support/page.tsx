export default function Support() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 px-8">
      <div className="max-w-2xl w-full text-center space-y-12">
        {/* Header */}
        <header>
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            Insert Coin 💰
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            If you enjoy this project and want to keep it alive, consider
            dropping a little “power-up” ✨
          </p>
        </header>

        {/* Main text */}
        <section className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Building and maintaining this project takes time and energy — but
            every contribution is like an{' '}
            <span className="text-yellow-400">extra life </span>
            that helps me keep creating simple, ad-free local multiplayer games.
          </p>

          <p>
            With your support, I’ll be able to add more games, new mechanics,
            and maybe even bring your favorite board game into the digital
            world.
          </p>

          <p className="italic text-gray-400">
            “No hero ever levels up alone… there’s always someone sharing a mana
            potion.” 🧪
          </p>
        </section>

        <div>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-xl bg-yellow-500 text-black font-bold text-lg shadow-lg hover:bg-yellow-400 transition"
          >
            Buy me a drink ☕
          </a>
        </div>

        {/* Footer */}
        <footer>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Lucas Fonseca — Thanks for playing!
          </p>
        </footer>
      </div>
    </div>
  );
}
