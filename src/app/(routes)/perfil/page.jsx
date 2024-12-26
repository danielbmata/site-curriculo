"use client"

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';

function ProfileContent() {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    name: '',
    username: '',
    age: '',
    email: user?.email || ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.uid) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setProfileData(prev => ({
              ...prev,
              ...userDoc.data(),
              email: user.email
            }));
          } else {
            // Se o documento não existe, cria um com dados iniciais
            const initialData = {
              name: '',
              username: '',
              age: '',
              email: user.email
            };
            await setDoc(doc(db, 'users', user.uid), initialData);
            setProfileData(initialData);
          }
        } catch (error) {
          console.error('Erro ao carregar dados do usuário:', error);
          setMessage({ type: 'error', text: 'Erro ao carregar dados do perfil' });
        }
      }
      setIsLoading(false);
    };

    fetchUserData();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user?.uid) {
      try {
        setIsSaving(true);
        setMessage({ type: '', text: '' });
        
        await setDoc(doc(db, 'users', user.uid), {
          ...profileData,
          updatedAt: new Date().toISOString()
        });
        
        setMessage({ type: 'success', text: 'Perfil atualizado com sucesso!' });
      } catch (error) {
        console.error('Erro ao salvar dados:', error);
        setMessage({ type: 'error', text: 'Erro ao salvar alterações' });
      } finally {
        setIsSaving(false);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50">
          <h1 className="text-2xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Seu Perfil
          </h1>

          {message.text && (
            <div className={`mb-6 p-4 rounded-xl ${
              message.type === 'error' 
                ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                : 'bg-green-500/10 border border-green-500/20 text-green-400'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center border-2 border-zinc-700">
                <User className="w-16 h-16 text-zinc-400" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  disabled
                  className="w-full px-4 py-2 rounded-xl bg-zinc-800/50 border border-zinc-700 opacity-50 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Nome</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 rounded-xl bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Username</label>
                <input
                  type="text"
                  value={profileData.username}
                  onChange={(e) => setProfileData(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full px-4 py-2 rounded-xl bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="@seususername"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Idade</label>
                <input
                  type="number"
                  value={profileData.age}
                  onChange={(e) => setProfileData(prev => ({ ...prev, age: e.target.value }))}
                  className="w-full px-4 py-2 rounded-xl bg-zinc-800/50 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Sua idade"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300
                ${isSaving
                  ? 'bg-zinc-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 active:scale-95'
                }
              `}
            >
              {isSaving ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ProtectedProfile() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <ProfileContent />;
} 