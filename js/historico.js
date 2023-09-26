// Função para criar uma tabela HTML a partir dos dados do relatório
function criarTabela(relatorio) {
    // Obtém a referência ao elemento de tabela no HTML
    const tabela = document.getElementById("tabela");
  
    // Limpa o conteúdo atual da tabela
    tabela.innerHTML = "";
  
    // Cria o cabeçalho da tabela
    const cabecalho = tabela.createTHead();
    const linhaCabecalho = cabecalho.insertRow();
    const colunas = ["Nome", "Equipe", "Placa/Modelo", "Local"];
  
    for (const coluna of colunas) {
      const th = document.createElement("th");
      th.textContent = coluna;
      linhaCabecalho.appendChild(th);
    }
  
    // Cria o corpo da tabela
    const corpoTabela = tabela.createTBody();
  
    // Preenche a tabela com os dados do relatório
    for (const registro of relatorio) {
      const linha = corpoTabela.insertRow();
      const colunasRegistro = [registro.nome, registro.equipe, registro.placa, registro.modelo, registro.local];
  
      for (const valorColuna of colunasRegistro) {
        const celula = linha.insertCell();
        celula.textContent = valorColuna;
      }
    }
  }
  
  // Função para carregar e exibir o relatório
  function carregarRelatorio() {
    const relatorio = JSON.parse(localStorage.getItem("relatorio"));
  
    if (relatorio) {
      criarTabela(relatorio);
    }
  }
  
  // Evento de carregamento da página
  window.addEventListener("load", carregarRelatorio);
  