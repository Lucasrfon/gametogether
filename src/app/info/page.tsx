export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 px-8">
      <div className="max-w-3xl w-full text-center space-y-12">
        {/* Cabeçalho */}
        <header>
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            Sobre o Projeto ♟️
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Onde estratégia encontra diversão, sem propagandas, sem distrações.
          </p>
        </header>

        {/* Texto principal */}
        <section className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Desde sempre fui fascinado por jogos — não só os digitais, mas
            também os de mesa, onde cada jogada carrega{' '}
            <span className="text-yellow-400">estratégia</span>,{' '}
            <span className="text-red-400">habilidade</span> e até um pouco de{' '}
            <span className="text-green-400">psicologia</span>.
          </p>

          <p>
            Hoje em dia é difícil encontrar lugares para jogar{' '}
            <strong>multiplayer local</strong> de forma simples, direta e sem
            propagandas. Por isso criei este projeto: um espaço dedicado
            inicialmente a clássicos.
          </p>

          <p>
            A ideia é resgatar a essência dos{' '}
            <span className="text-indigo-400">jogos de mesa</span> e da diversão
            compartilhada — aquele clima de final de tarde transformada em campo
            de batalha, lembrando partidas épicas de{' '}
            <span className="text-pink-400">War</span> até o amanhecer.
          </p>

          <p>
            E esse é só o começo: no futuro, quero expandir para jogos com mais
            jogadores, tabuleiros ainda mais complexos, campeonatos, ao infinito
            e além. Afinal, no mundo dos jogos,{' '}
            <span className="italic text-gray-400">
              o céu é o limite e a próxima jogada sempre pode virar a partida.
            </span>
          </p>

          <p className="italic text-gray-400">
            “Rolar um dado é fácil. Difícil é decidir se você está pronto para a
            aventura.” ⚔️
          </p>
        </section>

        {/* Rodapé */}
        <footer>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Lucas Fonseca — Player 1 Start
          </p>
        </footer>
      </div>
    </div>
  );
}
