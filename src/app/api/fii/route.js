export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');
  const query = searchParams.get('query');

  if (action === 'search') {
    // Lista de FIIs mais comuns para o autocomplete
    const fiis = [
      'MXRF11', 'HGLG11', 'KNRI11', 'XPLG11', 'XPML11', 'VISC11',
      'VILG11', 'HGRE11', 'GGRC11', 'BTLG11', 'VRTA11', 'RECT11',
      'RBRR11', 'BCFF11', 'BRCR11', 'HFOF11', 'HSML11', 'MALL11',
      'RBVA11', 'TGAR11', 'VGIP11', 'VINO11', 'XPCI11', 'XPIN11'
    ];

    const filteredFiis = fiis.filter(fii => 
      fii.toLowerCase().includes(query?.toLowerCase() || '')
    );

    return Response.json(filteredFiis);
  }

  if (action === 'quote') {
    const ticker = searchParams.get('ticker');
    if (!ticker) {
      return Response.json({ error: 'Ticker não fornecido' }, { status: 400 });
    }

    try {
      console.log(`Buscando dados para o ticker: ${ticker}`);
      const response = await fetch(
        `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}.SA`
      );
      const data = await response.json();
      
      // Validar se os dados necessários existem
      if (!data.chart?.result?.[0]?.meta) {
        console.error('Dados inválidos recebidos da API:', data);
        return Response.json({ error: 'Dados do FII indisponíveis' }, { status: 404 });
      }

      const meta = data.chart.result[0].meta;
      
      // Extrair e validar os dados necessários
      const cotacaoAtual = parseFloat(meta.regularMarketPrice);
      let dividendYield = 0;

      // Alguns FIIs podem não ter o dividendYield disponível, então vamos usar um valor padrão
      if (meta.trailingAnnualDividendYield) {
        dividendYield = parseFloat(meta.trailingAnnualDividendYield) * 100;
      } else {
        // Tentar buscar de outras fontes ou usar um valor médio do mercado
        // Por enquanto, vamos usar um valor padrão de 8% (média do mercado)
        dividendYield = 8;
      }

      // Validar se os valores são números válidos
      if (isNaN(cotacaoAtual) || isNaN(dividendYield)) {
        console.error('Valores inválidos:', { cotacaoAtual, dividendYield });
        return Response.json({ error: 'Dados inválidos recebidos da API' }, { status: 500 });
      }

      // Retornar apenas os dados necessários já validados
      return Response.json({
        success: true,
        data: {
          cotacaoAtual,
          dividendYield
        }
      });

    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return Response.json(
        { error: 'Erro ao buscar dados do FII' },
        { status: 500 }
      );
    }
  }

  return Response.json(
    { error: 'Ação não especificada' },
    { status: 400 }
  );
} 