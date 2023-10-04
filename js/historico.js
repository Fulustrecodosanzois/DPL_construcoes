let historicoContainer = document.querySelector("#historico-container")
function salvarRegistro() {
  

}


function exibirRegistros() {
  const registros = JSON.parse(localStorage.getItem('relatorio')) || [];
  if (registros != null) {
    relatorio = registros
  }
  else {
    // relatorio = []
  }
  const dataHora = {
    data: new Date().toLocaleDateString(),
    hora: new Date().toLocaleTimeString(),
  };

  relatorio.forEach((registro, index) => {
    console.log(registro)
    console.log(dataHora)
    let div = document.createElement("div")
    div.classList.add("d-flex", "align-content-center", "justify-content-center")
    div.innerHTML = `
    <div class="col-11 mt-4">
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

const btnEnviar = document.getElementById('btnEnviar');
if (btnEnviar) {
  btnEnviar.addEventListener('click', () => {
    salvarRegistro();
    window.location.href = 'desligar1.html';
  });
}

if (window.location.pathname.includes('historico.html')) {
  exibirRegistros();
}







