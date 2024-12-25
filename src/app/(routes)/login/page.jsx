"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-class"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-class"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="button-class">Entrar</button>
      </form>
      <Link href="/register">Não tem uma conta? Registre-se aqui.</Link>
    </div>
  );
} 