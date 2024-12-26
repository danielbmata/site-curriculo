"use client"

import { useState, useEffect } from 'react';
import { Send, User2, Bot } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  // Inicializa o Gemini
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

  // Função para gerar resposta do Gemini
  const generateGeminiResponse = async (prompt) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Obtém resposta do Gemini
      const aiResponse = await generateGeminiResponse(inputMessage);
      
      const botMessage = {
        text: aiResponse,
        sender: 'bot',
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Erro ao gerar resposta:', error);
      const errorMessage = {
        text: "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente mais tarde.",
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push('/login?message=Você precisa estar logado para acessar o chat');
    }
  }, [user, router]);

  if (!user) {
    return null; // Não renderiza nada enquanto redireciona
  }

  return (
    <div className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Chat
        </h1>
        <p className="text-zinc-400 mb-12">
          Converse com o assistente virtual.
        </p>

        <div className="glass-effect rounded-2xl p-6 min-h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.sender === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`p-2 rounded-xl ${
                  message.sender === 'user' 
                    ? 'bg-blue-500/20 text-blue-200' 
                    : 'bg-purple-500/20 text-purple-200'
                }`}>
                  {message.sender === 'user' ? (
                    <User2 className="w-5 h-5" />
                  ) : (
                    <Bot className="w-5 h-5" />
                  )}
                </div>
                <div className={`p-3 rounded-xl max-w-[80%] ${
                  message.sender === 'user'
                    ? 'bg-blue-500/10 text-zinc-200'
                    : 'bg-purple-500/10 text-zinc-200'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-2 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-opacity ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
              }`}
              disabled={isLoading}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 