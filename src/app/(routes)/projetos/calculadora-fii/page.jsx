"use client"

import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { ProtectedRoute } from '../../../../components/ProtectedRoute';

// Página da calculadora - minha primeira ferramenta "séria"!
export default function CalculadoraFII() {
  const [ticket, setTicket] = useState('');
  const [rendimentoDesejado, setRendimentoDesejado] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [sugestoes, setSugestoes] = useState([]);
  const [mostrarSugestoes, setMostrarSugestoes] = useState(false);
  const sugestoesRef = useRef(null);

  // Fecha as sugestões quando clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (sugestoesRef.current && !sugestoesRef.current.contains(event.target)) {
        setMostrarSugestoes(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Busca sugestões quando o usuário digita
  useEffect(() => {
    const buscarSugestoes = async () => {
      if (ticket.length < 2) {
        setSugestoes([]);
        return;
      }

      try {
        const response = await fetch(`/api/fii?action=search&query=${ticket}`);
        const data = await response.json();
        setSugestoes(data);
        setMostrarSugestoes(true);
      } catch (error) {
        console.error('Erro ao buscar sugestões:', error);
      }
    };

    const timeoutId = setTimeout(buscarSugestoes, 300);
    return () => clearTimeout(timeoutId);
  }, [ticket]);

  const validarEntradas = () => {
    if (!ticket) {
      setErro('Por favor, insira o código do FII.');
      return false;
    }

    const rendimento = parseFloat(rendimentoDesejado);
    if (isNaN(rendimento) || rendimento <= 0) {
      setErro('Por favor, insira um valor válido para o rendimento mensal desejado.');
      return false;
    }

    return true;
  };

  async function calcularNumeroMagico(e) {
    e.preventDefault();
    setLoading(true);
    setErro('');
    setResultado(null);

    if (!validarEntradas()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/fii?action=quote&ticker=${ticket}`);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (!data.success || !data.data) {
        throw new Error('Dados inválidos recebidos da API');
      }

      const { cotacaoAtual, dividendYield } = data.data;
      
      // Converter rendimento para número
      const rendimentoMensal = parseFloat(rendimentoDesejado);
      const rendimentoAnual = rendimentoMensal * 12;

      // Validar dados antes do cálculo
      if (dividendYield <= 0) {
        throw new Error('Dividend Yield inválido para este FII');
      }

      // Cálculo do número mágico
      const cotasNecessarias = Math.ceil(rendimentoAnual / (cotacaoAtual * (dividendYield / 100)));
      const investimentoTotal = cotasNecessarias * cotacaoAtual;

      // Validar resultado
      if (isNaN(cotasNecessarias) || isNaN(investimentoTotal)) {
        throw new Error('Erro no cálculo. Por favor, verifique os valores inseridos.');
      }

      setResultado({
        cotas: cotasNecessarias,
        investimentoTotal: investimentoTotal.toFixed(2),
        cotacaoAtual: cotacaoAtual.toFixed(2),
        dividendYield: dividendYield.toFixed(2)
      });
    } catch (error) {
      console.error('Erro no cálculo:', error);
      setErro(error.message || 'Erro ao calcular. Verifique os dados e tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  const handleRendimentoChange = (e) => {
    const value = e.target.value;
    // Permitir apenas números e ponto decimal
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setRendimentoDesejado(value);
    }
  };

  return (
    <ProtectedRoute>
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Calculadora do Número Mágico - FIIs
            </h1>
            <p className="text-zinc-400 mt-2">
              Calcule quantas cotas você precisa de um FII para atingir sua renda passiva desejada.
            </p>
          </div>

          <form onSubmit={calcularNumeroMagico} className="space-y-4">
            <div className="space-y-4">
              <div className="relative">
                <label htmlFor="ticket" className="block text-sm font-medium text-zinc-300 mb-2">
                  Código do FII
                </label>
                <input
                  type="text"
                  id="ticket"
                  value={ticket}
                  onChange={(e) => setTicket(e.target.value.toUpperCase())}
                  onFocus={() => setMostrarSugestoes(true)}
                  placeholder="Ex: MXRF11"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                  required
                  maxLength={6}
                  pattern="[A-Z0-9]+"
                />
                
                {mostrarSugestoes && sugestoes.length > 0 && (
                  <div
                    ref={sugestoesRef}
                    className="absolute z-10 w-full mt-1 bg-zinc-800 border border-zinc-700/50 rounded-xl shadow-lg max-h-60 overflow-auto"
                  >
                    {sugestoes.map((sugestao) => (
                      <button
                        key={sugestao}
                        type="button"
                        onClick={() => {
                          setTicket(sugestao);
                          setMostrarSugestoes(false);
                        }}
                        className="w-full px-4 py-2 text-left text-zinc-100 hover:bg-zinc-700/50 transition-colors"
                      >
                        {sugestao}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="rendimento" className="block text-sm font-medium text-zinc-300 mb-2">
                  Rendimento Mensal Desejado (R$)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  id="rendimento"
                  value={rendimentoDesejado}
                  onChange={handleRendimentoChange}
                  placeholder="Ex: 1000"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-300 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                'Calculando...'
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Calcular
                </>
              )}
            </button>
          </form>

          {erro && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-400">
              {erro}
            </div>
          )}

          {resultado && (
            <div className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50 space-y-4">
              <h2 className="text-xl font-bold text-zinc-100">Resultado do Cálculo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                  <p className="text-sm text-zinc-400">Cotas Necessárias</p>
                  <p className="text-2xl font-bold text-zinc-100">{resultado.cotas.toLocaleString('pt-BR')}</p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                  <p className="text-sm text-zinc-400">Investimento Total</p>
                  <p className="text-2xl font-bold text-zinc-100">
                    {parseFloat(resultado.investimentoTotal).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                  <p className="text-sm text-zinc-400">Cotação Atual</p>
                  <p className="text-2xl font-bold text-zinc-100">
                    {parseFloat(resultado.cotacaoAtual).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                  <p className="text-sm text-zinc-400">Dividend Yield Anual</p>
                  <p className="text-2xl font-bold text-zinc-100">{resultado.dividendYield}%</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
} 