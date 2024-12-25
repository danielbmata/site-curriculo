"use client"

import { useEffect, useState } from 'react';
import { db, auth } from '../../../firebase'; // Importar a configuração do Firestore e Auth
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth'; // Importar para verificar o estado de autenticação

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [user, setUser] = useState(null); // Estado para armazenar o usuário autenticado

    useEffect(() => {
        // Verifica se o usuário está autenticado
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
            const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
                const messagesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setMessages(messagesData);
            });

            return () => unsubscribe();
        }
    }, [user]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (newMessage.trim() && user) { // Verifica se o usuário está autenticado
            await addDoc(collection(db, 'messages'), { text: newMessage, createdAt: new Date(), uid: user.uid });
            setNewMessage('');
        }
    };

    if (!user) {
        return <div className="min-h-screen p-8">Você precisa estar logado para acessar o chat.</div>;
    }

    return (
        <div className="min-h-screen p-8">
            <h1 className="text-4xl font-bold">Chat em Tempo Real</h1>
            <div className="space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className="p-4 bg-zinc-800 rounded-lg">
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} className="flex mt-4">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 p-2 rounded-lg bg-zinc-800"
                    placeholder="Digite sua mensagem..."
                />
                <button type="submit" className="ml-2 p-2 bg-blue-500 rounded-lg">Enviar</button>
            </form>
        </div>
    );
} 