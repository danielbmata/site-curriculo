export default function Loading() {
  return (
    <div className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        {/* Navegação de volta (skeleton) */}
        <div className="h-6 w-40 bg-zinc-800/50 rounded-lg mb-8 animate-pulse" />

        {/* Cabeçalho do projeto (skeleton) */}
        <div className="relative mb-12">
          <div className="h-12 w-2/3 bg-zinc-800/50 rounded-lg mb-4 animate-pulse" />
          <div className="h-24 w-full bg-zinc-800/50 rounded-lg mb-6 animate-pulse" />

          {/* Tags (skeleton) */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-8 w-24 bg-zinc-800/50 rounded-full animate-pulse"
              />
            ))}
          </div>

          {/* Links (skeleton) */}
          <div className="flex gap-4">
            <div className="h-12 w-36 bg-zinc-800/50 rounded-xl animate-pulse" />
            <div className="h-12 w-36 bg-zinc-800/50 rounded-xl animate-pulse" />
          </div>
        </div>

        {/* Descrição detalhada (skeleton) */}
        <div className="glass-effect p-8 rounded-2xl">
          <div className="h-8 w-48 bg-zinc-800/50 rounded-lg mb-6 animate-pulse" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-4 w-full bg-zinc-800/50 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 