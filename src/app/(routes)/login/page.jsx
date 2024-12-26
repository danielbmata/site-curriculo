"use client"

import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const urlMessage = searchParams.get('message');
        if (urlMessage) {
            setMessage(urlMessage);
        }
    }, [searchParams]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/inicio');
        } catch (error) {
            let mensagem = '';
            switch (error.code) {
                case 'auth/invalid-email':
                    mensagem = 'Email inválido.';
                    break;
                case 'auth/user-disabled':
                    mensagem = 'Usuário desabilitado.';
                    break;
                case 'auth/user-not-found':
                    mensagem = 'Usuário não encontrado.';
                    break;
                case 'auth/wrong-password':
                    mensagem = 'Senha incorreta.';
                    break;
                default:
                    mensagem = 'Ocorreu um erro ao fazer login.';
            }
            setError(mensagem);
        }
    };

    return (
        <div className="min-h-screen p-8 animate-fadeIn">
            <div className="max-w-md mx-auto">
                <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Login
                </h1>
                <p className="text-zinc-400 mb-8">
                    Entre com suas credenciais para acessar sua conta.
                </p>

                <div className="p-6 rounded-2xl glass-effect border border-zinc-800/50">
                    {message && (
                        <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/50 text-blue-400">
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
                                Senha
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                            />
                        </div>

                        {error && (
                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-400">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-300 hover:brightness-110"
                        >
                            Entrar
                        </button>
                    </form>
                </div>

                <div className="mt-6 text-center">
                    <Link
                        href="/register"
                        className="text-zinc-400 hover:text-zinc-300 transition-colors"
                    >
                        Não tem uma conta? <span className="text-blue-400 hover:text-blue-300">Registre-se aqui</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}