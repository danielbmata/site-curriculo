"use client"

import { Home, Wrench, Contact, Menu, X, User2, Code2, Briefcase, LogOut, Award, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };
  
  // Fecha o menu quando mudar de página em telas pequenas
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Previne scroll quando menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const NavLink = ({ href, icon: Icon, children }) => (
    <Link
      href={href}
      className={`group relative flex items-center gap-3 rounded-xl p-3 text-sm font-medium transition-all duration-300 ease-out
        ${pathname === href 
          ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-zinc-100' 
          : 'text-zinc-400 hover:text-zinc-100'
        }
        ${hoveredLink === href ? 'scale-105' : 'scale-100'}
      `}
      onMouseEnter={() => setHoveredLink(href)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <div className={`relative flex items-center justify-center transition-all duration-300
        ${pathname === href ? 'text-blue-400' : 'text-zinc-400 group-hover:text-purple-400'}`}>
        <Icon className="w-5 h-5 relative z-10" />
        {pathname === href && (
          <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg animate-pulse" />
        )}
      </div>
      <span className="relative">
        {children}
        {pathname === href && (
          <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-400 to-purple-400 scale-x-100 transition-transform" />
        )}
      </span>
    </Link>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 backdrop-blur-lg bg-zinc-800/80 rounded-xl border border-zinc-700/50 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-72 backdrop-blur-xl bg-zinc-950/80 border-r border-zinc-800/50
          transform transition-all duration-500 ease-out
          lg:transform-none p-6
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="mb-8 flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <User2 className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-xl blur-xl opacity-50" />
          </div>
          <div>
            <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Daniel Mata
            </h2>
            <p className="text-xs text-zinc-500">Desenvolvedor Full Stack</p>
          </div>
        </div>

        <nav className="space-y-2">
          <NavLink href="/inicio" icon={Home}>Início</NavLink>
          <NavLink href="/projetos" icon={Code2}>Projetos</NavLink>
          <NavLink href="/experiencia" icon={Briefcase}>Experiência</NavLink>
          <NavLink href="/certificados" icon={Award}>Certificados</NavLink>
          <NavLink href="/chat" icon={MessageSquare}>Chat</NavLink>
          <NavLink href="/contato" icon={Contact}>Contato</NavLink>
          {user ? (
            <>
              <NavLink href="/perfil" icon={User2}>Perfil</NavLink>
              <button
                onClick={handleSignOut}
                className="w-full group relative flex items-center gap-3 rounded-xl p-3 text-sm font-medium transition-all duration-300 ease-out text-zinc-400 hover:text-zinc-100"
              >
                <div className="relative flex items-center justify-center transition-all duration-300 text-zinc-400 group-hover:text-purple-400">
                  <LogOut className="w-5 h-5 relative z-10" />
                </div>
                <span>Sair</span>
              </button>
            </>
          ) : (
            <NavLink href="/login" icon={User2}>Login</NavLink>
          )}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent mb-6" />
          <div className="text-xs text-zinc-500 text-center">
            Transformando ideias em código
          </div>
        </div>
      </aside>
    </>
  );
}
