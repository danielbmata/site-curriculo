"use client"

import { useState } from 'react';
import Link from 'next/link';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push('/ferramentas');
        } catch (error) {
            let mensagem = '';
            switch (error.code) {
                case 'auth/email-already-in-use':
                    mensagem = 'Este email já está em uso.';
                    break;
                case 'auth/invalid-email':
                    mensagem = 'Email inválido.';
                    break;
                case 'auth/operation-not-allowed':
                    mensagem = 'Operação não permitida.';
                    break;
                case 'auth/weak-password':
                    mensagem = 'A senha deve ter pelo menos 6 caracteres.';
                    break;
                default:
                    mensagem = 'Ocorreu um erro ao criar a conta.';
            }
            setError(mensagem);
        }
    };

    return (
        <div className="min-h-screen p-8 animate-fadeIn">
            <div className="max-w-md mx-auto">
                <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Criar Conta
                </h1>
                <p className="text-zinc-400 mb-8">
                    Registre-se para acessar todas as funcionalidades.
                </p>

                <div className="p-6 rounded-2xl glass-effect border border-zinc-800/50">
                    <form onSubmit={handleRegister} className="space-y-6">
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
                            Criar Conta
                        </button>
                    </form>
                </div>

                <div className="mt-6 text-center">
                    <Link
                        href="/login"
                        className="text-zinc-400 hover:text-zinc-300 transition-colors"
                    >
                        Já tem uma conta? <span className="text-blue-400 hover:text-blue-300">Faça login aqui</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}