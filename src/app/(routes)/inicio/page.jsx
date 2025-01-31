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
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    title: 'Frontend',
    techs: [
      { 
        name: 'React', 
        icon: <div className="w-6 h-6 relative group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
            <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
            <path d="M12 22.5c-1.9 0-3.3-.3-4.3-.9-1-.6-1.7-1.4-2.1-2.4-.4-1-.6-2.1-.6-3.2 0-1.2.2-2.3.6-3.3.4-1 1.1-1.8 2.1-2.4 1-.6 2.4-.9 4.3-.9s3.3.3 4.3.9c1 .6 1.7 1.4 2.1 2.4.4 1 .6 2.1.6 3.3 0 1.1-.2 2.2-.6 3.2-.4 1-1.1 1.8-2.1 2.4-1 .6-2.4.9-4.3.9Zm0-2c1.4 0 2.5-.2 3.2-.7.7-.4 1.2-1 1.5-1.8.3-.7.4-1.6.4-2.5s-.1-1.8-.4-2.5c-.3-.8-.8-1.3-1.5-1.8-.7-.4-1.8-.7-3.2-.7s-2.5.2-3.2.7c-.7.4-1.2 1-1.5 1.8-.3.7-.4 1.6-.4 2.5s.1 1.8.4 2.5c.3.8.8 1.3 1.5 1.8.7.4 1.8.7 3.2.7Z"/>
            <path d="M3.2 7.6c-.9-1.6-1.2-3.1-.7-4.3.4-1.2 1.3-2 2.7-2.5 1.3-.5 2.9-.5 4.6-.1 1.7.4 3.4 1.1 5 2.1 1.6 1 3 2.2 4.2 3.5 1.2 1.3 2.1 2.7 2.6 4 .5 1.3.7 2.6.4 3.7-.2 1.1-.8 2-1.7 2.7-1 .7-2.2 1-3.7 1v-2.1c1 0 1.8-.2 2.3-.6.5-.4.8-.9 1-1.5.1-.6 0-1.4-.3-2.2-.4-1-1.1-2.1-2.1-3.1-1-.9-2.2-1.9-3.5-2.7-1.3-.8-2.7-1.4-4-1.7-1.4-.3-2.6-.3-3.5 0-.9.3-1.5.8-1.7 1.4-.3.6-.2 1.4.2 2.3l-1.8 1Z"/>
            <path d="M8.8 20.8c-.9 1.6-2 2.7-3.3 3.2-1.2.4-2.4.3-3.5-.5-1.1-.8-1.9-2-2.3-3.7-.4-1.7-.4-3.6 0-5.7.4-2.1 1.1-4.1 2-6 .9-1.9 2-3.5 3.2-4.7 1.2-1.2 2.4-2 3.6-2.3 1.2-.3 2.3-.1 3.2.6.9.7 1.6 1.8 2 3.3l-2 .6c-.3-1-.7-1.8-1.2-2.2-.5-.4-1.1-.5-1.7-.3-.7.2-1.4.7-2.2 1.5-.8.8-1.6 1.9-2.3 3.3-.7 1.4-1.3 3-1.6 4.6-.3 1.7-.4 3.2-.2 4.4.2 1.3.6 2.2 1.2 2.7.6.5 1.4.6 2.2.2.8-.3 1.6-1 2.2-2l1.7 1.2Z"/>
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 bg-zinc-900 text-zinc-300 text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2 transition-opacity">
            React
          </span>
        </div>
      },
      { 
        name: 'Next.js', 
        icon: <div className="w-6 h-6 relative group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.317 12.317 0 0 0 2.465-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 bg-zinc-900 text-zinc-300 text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2 transition-opacity">
            Next.js
          </span>
        </div>
      },
      { 
        name: 'TypeScript', 
        icon: <div className="w-6 h-6 relative group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 bg-zinc-900 text-zinc-300 text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2 transition-opacity">
            TypeScript
          </span>
        </div>
      },
      { 
        name: 'Tailwind CSS', 
        icon: <div className="w-6 h-6 relative group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-cyan-400">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 bg-zinc-900 text-zinc-300 text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2 transition-opacity">
            Tailwind CSS
          </span>
        </div>
      }
    ]
  },
  {
    icon: <Database className="w-6 h-6 text-green-400" />,
    title: 'Backend',
    techs: [
      { 
        name: 'Node.js', 
        icon: <div className="w-6 h-6 relative group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
            <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 bg-zinc-900 text-zinc-300 text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2 transition-opacity">
            Node.js
          </span>
        </div>
      },
      { 
        name: 'Django', 
        icon: <div className="w-6 h-6 relative group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
            <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"/>
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 bg-zinc-900 text-zinc-300 text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2 transition-opacity">
            Django
          </span>
        </div>
      },
      { 
        name: 'Firebase', 
        icon: <div className="w-6 h-6 relative group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
            <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 bg-zinc-900 text-zinc-300 text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2 transition-opacity">
            Firebase
          </span>
        </div>
      }
    ]
  },
  {
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    title: 'Ferramentas',
    techs: [
      { 
        name: 'Cursor AI', 
        icon: <div className="w-6 h-6 relative group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
            <path d="M13.325 3.05L8.667 20.432l1.932.518 4.658-17.382-1.932-.518zM7.612 18.36l1.932.518 2.127-7.937-1.932-.518-2.127 7.937zM16.375 8.8l-2.127 7.937 1.932.518 2.127-7.937-1.932-.518z"/>
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 bg-zinc-900 text-zinc-300 text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2 transition-opacity">
            Cursor AI
          </span>
        </div>
      },
      { 
        name: 'Git', 
        icon: <div className="w-6 h-6 relative group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-orange-600">
            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.516.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.721.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 bg-zinc-900 text-zinc-300 text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2 transition-opacity">
            Git
          </span>
        </div>
      },
      { 
        name: 'GitHub', 
        icon: <div className="w-6 h-6 relative group">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-zinc-100">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          <span className="absolute opacity-0 group-hover:opacity-100 bg-zinc-900 text-zinc-300 text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2 transition-opacity">
            GitHub
          </span>
        </div>
      }
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
          {technologies.map((tech, index) => (
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
                <div className="flex items-center gap-3 mb-4">
                  {tech.icon}
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {tech.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {tech.techs.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 hover:bg-zinc-800/80 border border-zinc-700/50 transition-all duration-300 group"
                    >
                      {t.icon}
                      <span className="text-sm text-zinc-300 group-hover:text-zinc-100">
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 