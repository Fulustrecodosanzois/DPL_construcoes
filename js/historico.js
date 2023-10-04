// Função para salvar os dados no armazenamento local
let historicoContainer = document.querySelector("#historico-container")
function salvarRegistro() {


  // Cria um objeto com os dados do registro

}

// Função para exibir os registros na página de histórico
function exibirRegistros() {
  const registros = JSON.parse(localStorage.getItem('relatorio')) || [];
  // let resultado = JSON.parse(localStorage.getItem("relatorio"))
  if (registros != null) {
    relatorio = registros
  }
  else {
    relatorio = []
  }
  const dataHora = {
    data: new Date().toLocaleDateString(),
    hora: new Date().toLocaleTimeString(),
  };



  // Itera sobre os registros e os adiciona à tabela
  relatorio.forEach((registro, index) => {
    console.log(registro)
    console.log(dataHora)
    let div = document.createElement("div")
    div.classList.add("d-flex", "align-content-center", "justify-content-center")
    div.innerHTML = `
    <div class="col-11 sha">
    <div class="container mb-2 py-4 shadow rounded-4">
      <div>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">Registro N°:</th>
              <td>${index + 1}</td>
            </tr>
            <tr>
              <th scope="row">Nome:</th>
              <td>${registro.nome}</td>
              <th scope="row"></th>
            </tr>
            <tr>
              <th scope="row">Equipe:</th>
              <td>${registro.equipe}</td>
            </tr>
            <tr>
              <th scope="row">Placa/Modelo:</th>
              <td colspan="1">${registro.placa} / ${registro.modelo}</td>
            </tr>
            <tr>
              <th scope="row">Endereço:</th>
              <td colspan="1">${registro.local}</td>
            </tr>
            <tr class="">
              <td colspan="1" class="text-center bg-body-secondary">${dataHora.data}</td>
              <td colspan="1" class="text-center bg-body-secondary">${dataHora.hora}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `
    historicoContainer.appendChild(div)
  });
}

// Evento de clique no botão "Avançar" da página "registrar.html"
const btnEnviar = document.getElementById('btnEnviar');
if (btnEnviar) {
  btnEnviar.addEventListener('click', () => {
    salvarRegistro();
    window.location.href = 'desligar1.html'; // Redireciona para a página de histórico após o envio
  });
}

// Evento de carregamento da página "historico.html"
if (window.location.pathname.includes('historico.html')) {
  exibirRegistros();
}
exibirRegistros();