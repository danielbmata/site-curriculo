import { AuthProvider } from '../contexts/AuthContext';

export function RootLayoutClient({ children }) {
  return (
    <AuthProvider>{children}</AuthProvider>
  );
} 