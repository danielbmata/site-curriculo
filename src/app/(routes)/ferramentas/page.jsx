"use client"

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Ferramentas() {
  const [ticket, setTicket] = useState('');
  const [rendimentoDesejado, setRendimentoDesejado] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  async function calcularNumeroMagico(e) {
    e.preventDefault();
    setLoading(true);
    setErro('');
    setResultado(null);

    try {
      // Adiciona o sufixo .SA para buscar na B3
      const ticketFormatado = `${ticket.toUpperCase()}.SA`;
      
      // Busca dados do Yahoo Finance
      const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${ticketFormatado}`);
      const data = await response.json();

      if (data.error) {
        throw new Error('FII não encontrado');
      }

      const cotacaoAtual = data.chart.result[0].meta.regularMarketPrice;
      const dividendYield = data.chart.result[0].meta.trailingAnnualDividendYield * 100; // Convertendo para porcentagem

      // Cálculo do número mágico
      const rendimentoAnual = rendimentoDesejado * 12;
      const cotasNecessarias = Math.ceil(rendimentoAnual / (cotacaoAtual * (dividendYield / 100)));
      const investimentoTotal = cotasNecessarias * cotacaoAtual;

      setResultado({
        cotas: cotasNecessarias,
        investimentoTotal: investimentoTotal.toFixed(2),
        cotacaoAtual: cotacaoAtual.toFixed(2),
        dividendYield: dividendYield.toFixed(2)
      });
    } catch (error) {
      setErro('Erro ao buscar dados do FII. Verifique o código e tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
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
            <div>
              <label htmlFor="ticket" className="block text-sm font-medium text-zinc-300 mb-2">
                Código do FII
              </label>
              <input
                type="text"
                id="ticket"
                value={ticket}
                onChange={(e) => setTicket(e.target.value)}
                placeholder="Ex: MXRF11"
                className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                required
              />
            </div>

            <div>
              <label htmlFor="rendimento" className="block text-sm font-medium text-zinc-300 mb-2">
                Rendimento Mensal Desejado (R$)
              </label>
              <input
                type="number"
                id="rendimento"
                value={rendimentoDesejado}
                onChange={(e) => setRendimentoDesejado(e.target.value)}
                placeholder="Ex: 1000"
                className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                required
                min="0"
                step="0.01"
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
                <p className="text-2xl font-bold text-zinc-100">{resultado.cotas}</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                <p className="text-sm text-zinc-400">Investimento Total</p>
                <p className="text-2xl font-bold text-zinc-100">R$ {resultado.investimentoTotal}</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                <p className="text-sm text-zinc-400">Cotação Atual</p>
                <p className="text-2xl font-bold text-zinc-100">R$ {resultado.cotacaoAtual}</p>
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
  );
} 