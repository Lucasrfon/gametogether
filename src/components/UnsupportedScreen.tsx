export default function UnsupportedScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 max-w-md text-center shadow-xl">
        <h1 className="text-2xl font-bold mb-4">
          ⚠️ Dispositivo não suportado
        </h1>

        <p className="text-lg mb-2">
          Este site ainda não foi otimizado para telas pequenas.
        </p>

        <p className="text-sm opacity-70">
          Por favor, acesse em um computador ou aumente o tamanho da tela.
        </p>
      </div>
    </div>
  );
}
