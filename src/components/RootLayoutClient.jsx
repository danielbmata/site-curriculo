import { AuthProvider } from '../contexts/AuthContext';

export function RootLayoutClient({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-900 text-zinc-50">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
} 