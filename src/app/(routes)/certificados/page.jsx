"use client"

import { useState } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Cruzeiro do Sul',
    date: '2022 - 2024',
    type: 'degree',
    description: 'Formação abrangente em desenvolvimento de software e sistemas, com ênfase em:\n\n• Programação Web e Mobile\n• Banco de Dados e Modelagem\n• Engenharia de Software\n• Desenvolvimento Full Stack\n• Arquitetura de Computadores e Redes',
    skills: ['Programação', 'Banco de Dados', 'Engenharia de Software', 'Desenvolvimento Web', 'Arquitetura de Sistemas', 'Mobile'],
  },
  {
    title: 'JavaScript e TypeScript Full Stack',
    institution: 'Udemy',
    date: '2024',
    type: 'course',
    description: 'Curso avançado de desenvolvimento Full Stack com JavaScript e TypeScript, abordando:\n\n• Desenvolvimento Front-end com React e Redux\n• Back-end com Node.js e Express\n• Banco de dados NoSQL\n• Hooks e componentes funcionais\n• Design Patterns e boas práticas\n• TypeScript e tipagem estática\n• Desenvolvimento Full Stack completo',
    link: 'https://udemy.com/certificate/XXX',
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'Redux', 'NoSQL', 'Design Patterns'],
  },
  {
    title: 'Python 3 do Básico ao Avançado',
    institution: 'Udemy',
    date: '2023',
    type: 'course',
    description: 'Curso completo de Python abordando desde conceitos básicos até tópicos avançados como:\n\n• Desenvolvimento de interfaces com PySide6\n• Desenvolvimento web com Django\n• Automação com Selenium\n• Expressões Regulares (Regexp)\n• Testes automatizados e TDD\n• Programação Orientada a Objetos\n• Padrões de Projeto GoF\n• Algoritmos e estruturas de dados',
    link: 'https://www.udemy.com/certificate/UC-b3c17d1c-409a-4c96-aa56-d68dc7d00c56/',
    skills: ['Python', 'Django', 'Selenium', 'PySide6', 'TDD', 'POO', 'Design Patterns', 'Algoritmos'],
  },
  
  // Adicione seus outros certificados aqui
];

export default function Certificados() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Certificados e Formação
        </h1>
        <p className="text-zinc-400 mb-12">
          Minha jornada de aprendizado e desenvolvimento profissional.
        </p>

        <div className="relative">
          {/* Linha do tempo vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          <div className="space-y-12">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className={`
                  relative pl-24 transition-all duration-300
                  ${hoveredItem === index ? 'scale-105' : 'scale-100'}
                `}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Ícone */}
                <div className="absolute left-4 p-3 rounded-xl bg-zinc-900 border border-zinc-800 shadow-lg">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>

                <div className={`
                  p-6 rounded-2xl transition-all duration-300
                  glass-effect hover:border-zinc-700/50
                `}>
                  {/* Data */}
                  <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    {certificate.date}
                  </div>

                  {/* Título e Instituição */}
                  <h3 className="text-xl font-semibold text-zinc-100 mb-1">
                    {certificate.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{certificate.institution}</p>

                  {/* Descrição */}
                  <p className="text-zinc-300 text-sm mb-4">
                    {certificate.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {certificate.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Link do certificado se existir */}
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver certificado
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 