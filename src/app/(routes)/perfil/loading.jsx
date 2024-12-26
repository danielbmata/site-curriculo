export default function Loading() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50">
          <div className="h-8 w-48 bg-zinc-800 rounded-lg animate-pulse mb-8" />
          
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-zinc-800 animate-pulse" />
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse" />
                <div className="h-10 bg-zinc-800 rounded-xl animate-pulse" />
              </div>
            ))}

            <div className="h-12 bg-zinc-800 rounded-xl animate-pulse mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
} 