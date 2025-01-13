"use client"

import { useParams } from 'next/navigation';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Usando os mesmos projetos da página principal
const projects = [
  {
    title: 'Portfólio Pessoal',
    description: 'Site pessoal desenvolvido com tecnologias modernas, apresentando minha jornada profissional e projetos. Interface responsiva e moderna com animações suaves.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/danielbmata/site-curriculo',
    demo: '/',
    featured: true,
    slug: 'portfolio-pessoal',
    longDescription: `
      Este portfólio foi desenvolvido com o objetivo de apresentar minha jornada profissional e projetos de forma moderna e interativa.
      
      Principais características:
      • Interface responsiva e moderna com animações suaves
      • Sistema de autenticação com Firebase
      • Design system consistente com Tailwind CSS
      • Integração com GitHub para exibição de projetos
      • Chat integrado com IA para interação
      
      O projeto foi construído utilizando as melhores práticas de desenvolvimento web moderno, incluindo:
      • Componentização eficiente
      • Gerenciamento de estado com Context API
      • Rotas dinâmicas com Next.js
      • Otimização de performance
      • SEO aprimorado
    `
  },
  {
    title: 'Calculadora do Número Mágico - FIIs',
    description: 'Uma ferramenta para calcular quantas cotas de um FII você precisa para atingir sua renda passiva desejada.',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/danielbmata/calculadora-fii',
    demo: '/projetos/calculadora-fii',
    featured: true,
    slug: 'calculadora-fii',
    longDescription: `
      A Calculadora do Número Mágico para FIIs é uma ferramenta que ajuda investidores a planejarem seus investimentos em Fundos Imobiliários.
      
      Funcionalidades principais:
      • Cálculo personalizado de cotas necessárias
      • Simulação de diferentes cenários de investimento
      • Interface intuitiva e fácil de usar
      • Resultados detalhados e explicativos
      
      Tecnologias utilizadas:
      • React para interface interativa
      • Next.js para otimização e SSR
      • Tailwind CSS para estilização moderna
      • Cálculos precisos com JavaScript
    `
  },
  {
    title: 'Meu Celular',
    description: 'Sistema completo para gestão de assistências técnicas de smartphones com ferramentas modernas e interface intuitiva',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/danielbmata/',
    demo: 'https://meucelular.vercel.app/',
    featured: true,
    slug: 'meu-celular',
    longDescription: `
      O Meu Celular é um sistema completo para gestão de assistências técnicas de smartphones, desenvolvido para facilitar o dia a dia de técnicos e lojistas.
      
      Recursos principais:
      • Cadastro e acompanhamento de ordens de serviço
      • Gestão de estoque de peças
      • Controle financeiro
      • Relatórios detalhados
      • Interface intuitiva para usuários
      
      Stack tecnológica:
      • Frontend em React com Next.js
      • Backend em Node.js
      • Banco de dados PostgreSQL
      • UI moderna com Tailwind CSS
      • Sistema de autenticação seguro
    `
  }
];

export default function ProjetoDetalhe() {
  const params = useParams();
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen p-8 animate-fadeIn">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-zinc-100">Projeto não encontrado</h1>
          <Link 
            href="/projetos"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        {/* Navegação de volta */}
        <Link 
          href="/projetos"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para projetos
        </Link>

        {/* Cabeçalho do projeto */}
        <div className="relative mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {project.title}
          </h1>
          <p className="text-zinc-400 text-lg mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-zinc-300 border border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-zinc-100 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              Ver no GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-5 h-5" />
                Ver Demo
              </a>
            )}
          </div>
        </div>

        {/* Descrição detalhada */}
        <div className="glass-effect p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-zinc-100 mb-6">
            Sobre o Projeto
          </h2>
          <div className="text-zinc-400 space-y-4 whitespace-pre-line">
            {project.longDescription}
          </div>
        </div>
      </div>
    </div>
  );
} 