"use client"

import { useState } from 'react';
import Link from 'next/link';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Para registro
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Redirecionar ou mostrar mensagem de sucesso
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen p-8">
            <h1 className="text-4xl font-bold">Registrar</h1>
            <form onSubmit={handleRegister} className="space-y-4">
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
                <button type="submit" className="button-class">Registrar</button>
            </form>
            <Link href="/login">Já tem uma conta? Faça login aqui.</Link>
        </div>
    );
} 