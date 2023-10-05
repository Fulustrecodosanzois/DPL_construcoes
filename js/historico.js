let historicoContainer = document.querySelector("#historico-container")
function salvarRegistro() {

 /* VAZIO? */
 /* VAZIO? */
 /* VAZIO? */
 /* VAZIO? */
 /* VAZIO? */

}

function atualizarData() {
  let dataAtual= new Date();
  let dataFormatada = dataAtual.toLocaleDateString();
  elementoData.textContent = dataFormatada;

  atualizarData();
  setInterval(atualizarData,1000);

  let tabelaVetor = JSON.parse(localStorage.getItem("relatorio"))

  if(tabelaVetor != null) {
    let corpo = document.getElementById("")
  }
}

function exibirRegistros() {
  const registros = JSON.parse(localStorage.getItem('relatorio')) || [];
  if (registros != null) {
    relatorio = registros
  }
  else {
    // relatorio = []
  }
  // const dataHora = {
  //   data: new Date().toLocaleDateString(),
  //   hora: new Date().toLocaleTimeString(),
  // };

  relatorio.forEach((registro, index) => {
    console.log(registro)
    let div = document.createElement("div")
    div.classList.add("d-flex", "align-content-center", "justify-content-center",)
    div.innerHTML = ` 
    <div class="col-10 col-lg-6 py-3 mt-4 shadow rounded-4 d-flex justify-content-center align-content-center">
      <div class="px-3">
        <table class="table px-4 ">
          <tbody>
            <tr class="">
              <th scope="row" class="bg-body-secondary rounded-start">Registro N°:</th>
              <td class="text-end bg-body-secondary rounded-end" colspan="2">${index < 9 ? '00' : ''}${index > 10 ? '0' : ''}${index > 99 ? '' : ''}${index + 1}</td>
            </tr>
            <tr class="">
              <th scope="row">Nome:</th>
              <td class="text-end" colspan="2">${registro.nome}</td>
              
            </tr>
            <tr>
              <th scope="row">Equipe:</th>
              <td class="text-end" colspan="2">${registro.equipe}</td>
            </tr>
            <tr>
              <th scope="row" colspan="1">Placa/Modelo:</th>
              <td colspan=23" class="text-end">${registro.placa} / ${registro.modelo}</td>
            </tr>
            <tr>
              <th scope="row">Endereço:</th>
              <td colspan="2" class="text-end">${registro.local}</td>
            </tr>
            <tr class="">
              <td colspan="2" class="bg-body-tertiary">${registro.data}</td>
              <td colspan="2" class="bg-body-tertiary text-end">${registro.hora}</td>
            </tr>
          </tbody>
        </table>
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
exibirRegistros()








