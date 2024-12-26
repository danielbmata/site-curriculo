"use client"

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '@/firebase';
import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';

function ProfileContent() {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    name: '',
    username: '',
    age: '',
    photoURL: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.uid) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setProfileData(userDoc.data());
          }
        } catch (error) {
          console.error('Erro ao carregar dados do usuário:', error);
        }
      }
      setIsLoading(false);
    };

    fetchUserData();
  }, [user]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file && user?.uid) {
      try {
        setIsSaving(true);
        const storage = getStorage();
        const storageRef = ref(storage, `profile_images/${user.uid}`);
        await uploadBytes(storageRef, file);
        const photoURL = await getDownloadURL(storageRef);
        
        await updateDoc(doc(db, 'users', user.uid), {
          photoURL
        });
        
        setProfileData(prev => ({ ...prev, photoURL }));
      } catch (error) {
        console.error('Erro ao fazer upload da imagem:', error);
      } finally {
        setIsSaving(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user?.uid) {
      try {
        setIsSaving(true);
        await updateDoc(doc(db, 'users', user.uid), profileData);
      } catch (error) {
        console.error('Erro ao salvar dados:', error);
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center border-2 border-zinc-700 group-hover:border-blue-500 transition-all duration-300">
                  {profileData.photoURL ? (
                    <img
                      src={profileData.photoURL}
                      alt="Foto de perfil"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-16 h-16 text-zinc-400" />
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>

            <div className="space-y-4">
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