"use client"

import { useState } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Calculadora do Número Mágico - FIIs',
    description: 'Uma ferramenta para calcular quantas cotas de um FII você precisa para atingir sua renda passiva desejada.',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/seu-usuario/calculadora-fii',
    demo: '/ferramentas',
    featured: true,
  },
  {
    title: 'Falta add',
    description: 'Falta add',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    github: 'https://github.com/seu-usuario/portfolio',
    demo: '/ferramentas/falta-add',
    featured: true,
  },
  {
    title: 'Falta add',
    description: 'Falta add',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/seu-usuario/ecommerce-dashboard',
    featured: true,
  },
  {
    title: 'Falta add',
    description: 'Falta add',
    tags: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/seu-usuario/api-restful',
    featured: false,
  },
];

export default function Projetos() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Ferramentas
        </h1>
        <p className="text-zinc-400 mb-8">
          Uma seleção das minhas ferramentas mais úteis...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                relative group p-6 rounded-2xl transition-all duration-300
                ${hoveredProject === index ? 'scale-105' : 'scale-100'}
                glass-effect hover:border-zinc-700/50
              `}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 shadow-lg">
                  <Star className="w-4 h-4 text-white" />
                </div>
              )}
              <div className="relative">
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
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
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
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