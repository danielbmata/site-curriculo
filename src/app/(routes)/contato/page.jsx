"use client"

import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Contato() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const contacts = [
    {
      icon: Mail,
      label: "d7mata@gmail.com",
      href: "mailto:d7mata@gmail.com",
      color: "text-blue-400",
      description: "Entre em contato por email"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/danielbmata",
      color: "text-purple-400",
      description: "Veja meus projetos e contribuições"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/danielbmata",
      color: "text-blue-500",
      description: "Conecte-se comigo profissionalmente"
    }
  ];

  return (
    <div className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Contato
        </h1>
        <p className="text-zinc-400 mb-12">
          Vamos conversar? Entre em contato através de um dos canais abaixo.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`
                  group relative p-6 rounded-2xl transition-all duration-300
                  glass-effect hover:border-zinc-700/50
                  ${hoveredItem === index ? 'scale-105' : 'scale-100'}
                `}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-xl bg-zinc-900 border border-zinc-800 shadow-lg ${contact.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {contact.label}
                  </h3>
                </div>
                
                <p className="text-zinc-400 text-sm mb-4">
                  {contact.description}
                </p>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className={`w-5 h-5 ${contact.color}`} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
} 