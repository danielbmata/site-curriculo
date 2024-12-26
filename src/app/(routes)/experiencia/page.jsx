"use client"

import { useState } from 'react';
import { Building2, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Técnico de TI (Estágio)',
    company: 'Santa Casa de Misericórdia de Poções - Hospital São Lucas',
    period: 'Mai 2023 - Nov 2023',
    description: 'Atuei no suporte e desenvolvimento da infraestrutura tecnológica hospitalar, com foco em:\n\n• Gerenciamento de redes de computadores e impressoras\n• Suporte técnico especializado aos colaboradores\n• Desenvolvimento de soluções web para otimização de processos\n• Administração e manutenção de bancos de dados\n• Gestão do sistema hospitalar integrado\n• Resolução proativa de problemas técnicos\n• Capacitação e treinamento da equipe em novas tecnologias',
    skills: ['Gerenciamento de Rede', 'Suporte Técnico', 'Desenvolvimento Web', 'Banco de Dados', 'Administração de Sistemas', 'Treinamento'],
  },
  {
    type: 'work',
    title: 'Técnico de Redes',
    company: 'Koala Telecom',
    period: 'Jan 2020 - Mar 2021',
    description: 'Responsável pela implementação e manutenção de infraestrutura de rede, com foco em:\n\n• Manutenção preventiva e corretiva de computadores\n• Instalação e configuração de internet banda larga para clientes residenciais e empresariais\n• Implementação e manutenção de sistemas de segurança CFTV\n\nContribuí diretamente para a expansão da base de clientes e melhoria da qualidade do serviço prestado.',
    skills: ['Instalação de Redes', 'Suporte Técnico', 'CFTV', 'Manutenção de Computadores', 'Banda Larga'],
  },
];

export default function Experiencia() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Experiência
        </h1>
        <p className="text-zinc-400 mb-12">
          Minha jornada profissional e acadêmica.
        </p>

        <div className="relative">
          {/* Linha do tempo vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
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
                  {experience.type === 'work' ? (
                    <Building2 className="w-6 h-6 text-blue-400" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  )}
                </div>

                <div className={`
                  p-6 rounded-2xl transition-all duration-300
                  glass-effect hover:border-zinc-700/50
                `}>
                  {/* Período */}
                  <div className="flex items-center gap-2 text-sm text-zinc-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </div>

                  {/* Título e Empresa */}
                  <h3 className="text-xl font-semibold text-zinc-100 mb-1">
                    {experience.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{experience.company}</p>

                  {/* Descrição */}
                  <p className="text-zinc-300 text-sm mb-4">
                    {experience.description}
                  </p>

                  {/* Skills */}
                  {experience.skills && (
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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