"use client"

import { useState } from 'react';
import { Code2, Briefcase, Mail, ArrowRight, Github, Linkedin, Database, Layout, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const highlights = [
  {
    icon: Code2,
    title: 'Desenvolvedor Full Stack',
    description: 'Desenvolvendo aplicações modernas e escaláveis com as melhores práticas de desenvolvimento web.',
  },
  {
    icon: Sparkles,
    title: 'Inovação com IA',
    description: 'Utilizando Inteligência Artificial como aliada no desenvolvimento, aumentando produtividade e qualidade do código.',
  },
  {
    icon: Briefcase,
    title: 'Experiência Profissional',
    description: 'Graduado em ADS, com projetos em produção e experiência em desenvolvimento de sistemas empresariais.',
  }
];

const technologies = [
  {
    icon: '/tech/react.webp',
    title: 'Frontend',
    techs: [
      { name: 'React', icon: '/tech/react.webp' },
      { name: 'Next.js', icon: '/tech/nextjs.webp' },
      { name: 'TypeScript', icon: '/tech/typescript.webp' },
      { name: 'Tailwind CSS', icon: '/tech/tailwind.webp' },
      { name: 'HTML5', icon: '/tech/html.webp' },
      { name: 'CSS3', icon: '/tech/css.webp' }
    ]
  },
  {
    icon: '/tech/nodejs.webp',
    title: 'Backend',
    techs: [
      { name: 'Node.js', icon: '/tech/nodejs.webp' },
      { name: 'Express', icon: '/tech/express.webp' },
      { name: 'PostgreSQL', icon: '/tech/postgresql.webp' },
      { name: 'Firebase', icon: '/tech/firebase.webp' }
    ]
  },
  {
    icon: '/tech/github.webp',
    title: 'Ferramentas',
    techs: [
      { name: 'Git', icon: '/tech/git.webp' },
      { name: 'GitHub', icon: '/tech/github.webp' },
      { name: 'VS Code', icon: '/tech/vscode.webp' },
      { name: 'Vercel', icon: '/tech/vercel.webp' },
      { name: 'Figma', icon: '/tech/figma.webp' }
    ]
  }
];

export default function Inicio() {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Seção principal */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient-x" />
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative text-center px-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Daniel Mata
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais memoráveis através de código limpo e design moderno. Combinando expertise técnica com o poder da IA para desenvolver soluções inovadoras.
          </p>
          
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
                className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 hover:scale-105 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/danielbmata"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 hover:scale-105 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de highlights */}
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
                <div className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 
                  transition-opacity duration-300
                  ${hoveredSection === index ? 'opacity-100' : 'opacity-0'}
                `} />
                
                <div className="relative z-10">
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

      {/* Nova seção de tecnologias */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 text-center">
          Tecnologias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            return (
              <div
                key={index}
                className={`
                  relative p-6 rounded-2xl transition-all duration-300
                  ${hoveredTech === index ? 'scale-105' : 'scale-100'}
                  glass-effect hover:border-zinc-700/50
                `}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 
                  transition-opacity duration-300
                  ${hoveredTech === index ? 'opacity-100' : 'opacity-0'}
                `} />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4">
                    <Image
                      src={tech.icon}
                      alt={tech.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mb-4">
                    {tech.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {tech.techs.map((t, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-zinc-300 border border-zinc-700/50 hover:scale-105 transition-transform"
                      >
                        <Image
                          src={t.icon}
                          alt={t.name}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-sm">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 