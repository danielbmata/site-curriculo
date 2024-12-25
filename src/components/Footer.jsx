export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-zinc-900/50">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-gradient-x"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-0 right-1/4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Nome do autor */}
          <div className="text-center mb-3">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block">
              Daniel Mata
            </h2>
          </div>

          {/* Linha de separação */}
          <div className="flex items-center justify-center mb-3">
            <div className="h-px w-8 bg-zinc-700/80"></div>
            <div className="mx-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>
            <div className="h-px w-8 bg-zinc-700/80"></div>
          </div>

          {/* Direitos autorais */}
          <div className="text-center text-xs text-zinc-500">
            <p>© {currentYear} • Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
