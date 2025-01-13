"use client"

import { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import Link from 'next/link';

// Array com meus projetos - depois vou adicionar mais quando terminar eles
// To usando featured: true pros projetos que são mais legais
const projects = [
  {
    title: 'Portfólio Pessoal',
    description: 'Site pessoal desenvolvido com tecnologias modernas, apresentando minha jornada profissional e projetos. Interface responsiva e moderna com animações suaves.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/danielbmata/site-curriculo',
    demo: '/',
    featured: true,
    slug: 'portfolio-pessoal'
  },
  {
    title: 'DarkNet',
    description: 'Sistema completo de gestão financeira e de estoque com interface moderna, desenvolvido com Next.js, React, TypeScript e Firebase. Inclui autenticação, controle financeiro e gerenciamento de estoque. [Projeto Proprietário - Disponível para demonstração em entrevistas]',
    tags: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    demo: '#',
    featured: true,
    isPrivate: true,
    slug: 'darknet'
  },
  {
    title: 'Meu Celular [Em Construção]',
    description: 'Sistema completo para gestão de assistências técnicas de smartphones com ferramentas modernas e interface intuitiva. Projeto em desenvolvimento ativo, com novas funcionalidades sendo adicionadas.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/danielbmata/',
    demo: '#',
    featured: true,
    inProgress: true,
    slug: 'meu-celular'
  },
  {
    title: 'Mensagem de Amor - Aniversário Especial',
    description: 'Uma aplicação web romântica desenvolvida especialmente para o aniversário da minha namorada, com uma mensagem de amor e uma surpresa para o dia seguinte, quando comemoramos também o aniversário do nosso namoro.',
    tags: ['Node.js', 'Express', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/danielbmata/',
    demo: 'https://daniel-to-sabrina.vercel.app/',
    featured: true,
    slug: 'daniel-e-sabrina'
  }
  // ... outros projetos que vou adicionar depois
];

// Página de projetos - to usando bastante os componentes do Lucide, são muito bons!
export default function Projetos() {
  // Estado pro hover - ainda to aprendendo a usar direito o useState
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho com gradiente - copiei da página inicial porque ficou bonito */}
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Projetos
        </h1>
        <p className="text-zinc-400 mb-12">
          Alguns dos projetos que desenvolvi durante minha jornada de aprendizado.
        </p>

        {/* Grid de projetos - primeiro uso do grid no Tailwind! */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                relative p-6 rounded-2xl transition-all duration-300
                ${hoveredProject === index ? 'scale-105' : 'scale-100'}
                glass-effect hover:border-zinc-700/50
              `}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Efeito de hover que aprendi vendo o site da Vercel */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Estrela pros projetos featured - achei legal destacar os melhores */}
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 shadow-lg">
                  <Star className="w-4 h-4 text-white" />
                </div>
              )}

              {/* Resto do conteúdo do card */}
              <div className="relative">
                <Link 
                  href={`/projetos/${project.slug}`}
                  className="inline-block text-xl font-semibold text-zinc-100 mb-2 hover:text-blue-400 transition-colors"
                >
                  {project.title}
                </Link>
                <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                
                {/* Tags das tecnologias - adoro esse estilo de badge */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links - aprendi a usar target="_blank" com rel="noopener" por segurança */}
                <div className="flex gap-4">
                  {!project.isPrivate && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  {project.isPrivate && (
                    <span className="flex items-center gap-2 text-sm text-zinc-400">
                      <ExternalLink className="w-4 h-4" />
                      Demo disponível em entrevistas
                    </span>
                  )}
                  {project.inProgress && (
                    <span className="flex items-center gap-2 text-sm text-yellow-400">
                      <ExternalLink className="w-4 h-4" />
                      Em desenvolvimento
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 