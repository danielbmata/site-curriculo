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
    title: 'DarkNet',
    description: 'Sistema completo de gestão financeira e de estoque com interface moderna, desenvolvido com Next.js, React, TypeScript e Firebase. Inclui autenticação, controle financeiro e gerenciamento de estoque. [Projeto Proprietário - Disponível para demonstração em entrevistas]',
    tags: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    demo: '#',
    featured: true,
    isPrivate: true,
    slug: 'darknet',
    longDescription: `
      DarkNet é um sistema moderno e completo de gestão financeira e de estoque, desenvolvido sob medida para a empresa DarkNet (Provedor de Internet). O sistema foi vendido e é atualmente utilizado em produção, sendo um projeto proprietário.

      Nota sobre disponibilidade:
      Por se tratar de um projeto proprietário, o código-fonte não está disponível publicamente. No entanto, posso realizar demonstrações detalhadas do sistema durante entrevistas, mostrando sua arquitetura e funcionalidades.

      Funcionalidades principais:
      • Sistema de autenticação completo com email/senha
      • Gerenciamento financeiro com receitas e despesas
      • Controle de estoque detalhado
      • Categorização flexível para transações e produtos
      • Métricas e relatórios em tempo real

      Módulo Financeiro:
      • Registro e categorização de transações
      • Acompanhamento de receitas e despesas
      • Métricas financeiras detalhadas
      • Categorias personalizáveis
      • Relatórios e análises

      Módulo de Estoque:
      • Gerenciamento completo de itens
      • Controle de quantidade e preços
      • Categorização de produtos
      • Métricas de estoque em tempo real
      • Alertas de estoque baixo

      Tecnologias utilizadas:
      • Next.js 15.1.3 e React 19 para frontend
      • TypeScript para tipagem segura
      • Firebase para autenticação e banco de dados
      • Tailwind CSS para estilização moderna
      • Zod para validação de dados

      Arquitetura e Segurança:
      • Componentes React reutilizáveis
      • Contextos para gerenciamento de estado
      • Hooks personalizados
      • Validação robusta com TypeScript e Zod
      • Proteção de rotas e sessões seguras

      UI/UX:
      • Design moderno com tema escuro
      • Interface totalmente responsiva
      • Animações suaves e feedback visual
      • Sistema de notificações integrado
      • Experiência de usuário intuitiva

      Demonstração:
      Durante entrevistas, posso apresentar:
      • Tour completo do sistema em funcionamento
      • Explicação detalhada da arquitetura
      • Demonstração das principais funcionalidades
      • Discussão sobre desafios e soluções
      • Exemplos de código e padrões utilizados
    `
  },
  {
    title: 'Meu Celular [Em Construção]',
    description: 'Sistema completo para gestão de assistências técnicas de smartphones com ferramentas modernas e interface intuitiva. Projeto em desenvolvimento ativo, com novas funcionalidades sendo adicionadas.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/danielbmata/',
    demo: '#',
    featured: true,
    inProgress: true,
    slug: 'meu-celular',
    longDescription: `
      O Meu Celular é um sistema em desenvolvimento ativo para gestão de assistências técnicas de smartphones, projetado para facilitar o dia a dia de técnicos e lojistas.
      
      Status do Desenvolvimento:
      • Interface principal em construção
      • Sistema de autenticação implementado
      • Banco de dados estruturado
      • API em desenvolvimento
      • Testes sendo realizados
      
      Recursos planejados:
      • Cadastro e acompanhamento de ordens de serviço
      • Gestão de estoque de peças
      • Controle financeiro
      • Relatórios detalhados
      • Interface intuitiva para usuários
      
      Stack tecnológica em uso:
      • Frontend em React com Next.js
      • Backend em Node.js
      • Banco de dados PostgreSQL
      • UI moderna com Tailwind CSS
      • Sistema de autenticação seguro
      
      Próximas etapas:
      • Implementação do módulo de ordens de serviço
      • Desenvolvimento do controle de estoque
      • Criação do sistema de relatórios
      • Testes de integração
      • Deploy da primeira versão
    `
  },
  {
    title: 'Mensagem de Amor - Aniversário Especial',
    description: 'Uma aplicação web romântica desenvolvida especialmente para o aniversário da minha namorada, com uma mensagem de amor e uma surpresa para o dia seguinte, quando comemoramos também o aniversário do nosso namoro.',
    tags: ['Node.js', 'Express', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/danielbmata/',
    demo: 'https://daniel-to-sabrina.vercel.app/',
    featured: true,
    slug: 'daniel-e-sabrina',
    longDescription: `
      Uma aplicação web romântica que desenvolvi com muito carinho para surpreender minha namorada em seu aniversário, com uma mensagem especial de amor e uma surpresa adicional para o dia seguinte, quando também celebramos o aniversário do nosso namoro.
      
      Funcionalidades principais:
      • Sistema de proteção de conteúdo baseado em data
      • Página inicial com mensagem de aniversário
      • Contagem regressiva para a surpresa do dia seguinte
      • Animações suaves e românticas
      • Design responsivo para acesso em qualquer dispositivo
      
      Tecnologias utilizadas:
      • Backend em Node.js com Express para controle de datas
      • Frontend em HTML5 e CSS3 puro para maior controle do design
      • JavaScript vanilla para animações e interatividade
      • Animate.css para efeitos especiais
      • Font Awesome para ícones decorativos
      
      Destaques técnicos:
      • Código limpo e organizado
      • Performance otimizada para carregamento rápido
      • Compatibilidade com todos os navegadores
      • Deploy automatizado na Vercel
      • UX/UI focado em transmitir emoção e carinho
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
            {!project.isPrivate && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-zinc-100 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                Ver no GitHub
              </a>
            )}
            {project.demo && project.demo !== '#' && (
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
            {project.isPrivate && (
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-zinc-100">
                <ExternalLink className="w-5 h-5" />
                Demo disponível em entrevistas
              </div>
            )}
            {project.inProgress && (
              <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500/20 to-yellow-500/20 text-yellow-400">
                <ExternalLink className="w-5 h-5" />
                Em desenvolvimento
              </div>
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