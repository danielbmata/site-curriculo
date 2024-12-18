export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-zinc-900/50">
      {/* Caramba, demorei mt pra fazer esse gradiente ficar legal */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-gradient-x"></div>
      
      {/* Coloquei esses elementos pra ficar mais bonito, vi num tutorial e adaptei */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-0 right-1/4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative border-t border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Esse efeito de destaque ficou mt legal, orgulhoso desse kkkk */}
          <div className="text-center mb-3">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block">
              Daniel Mata
            </h2>
          </div>

          {/* Linha pra separar, básica mas funciona */}
          <div className="flex items-center justify-center mb-3">
            <div className="h-px w-8 bg-zinc-700/80"></div>
            <div className="mx-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>
            <div className="h-px w-8 bg-zinc-700/80"></div>
          </div>

          {/* Rodapé padrão, nada demais */}
          <div className="text-center text-xs text-zinc-500">
            <p>© {currentYear} • Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
