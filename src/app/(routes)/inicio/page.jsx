"use client"

import { useState } from 'react';
import { Code2, Briefcase, Mail, ArrowRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const highlights = [
  {
    icon: Code2,
    title: 'Desenvolvedor Full Stack',
    description: 'Especializado em criar experiências web modernas e intuitivas',
  },
  {
    icon: Briefcase,
    title: '+2 Anos de Experiência',
    description: 'Trabalhando com as tecnologias mais recentes do mercado',
  },
  {
    icon: Mail,
    title: 'Disponível para Projetos',
    description: 'Aberto a novos desafios e oportunidades de colaboração',
  },
];

export default function Inicio() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background com gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient-x" />
        
        {/* Elementos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        {/* Conteúdo do Hero */}
        <div className="relative text-center px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Daniel Mata
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Transformando ideias em experiências digitais memoráveis através de código limpo e design moderno.
          </p>
          
          {/* Botões de ação */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contato"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:scale-105 transition-all duration-300"
            >
              Entre em Contato
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <div className="flex gap-4">
              <a
                href="https://github.com/danielbmata"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-effect hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/danielbmata"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-effect hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`
                  relative p-6 rounded-2xl transition-all duration-300
                  ${hoveredSection === index ? 'scale-105' : 'scale-100'}
                  glass-effect hover:border-zinc-700/50
                `}
                onMouseEnter={() => setHoveredSection(index)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Efeito de gradiente no hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 