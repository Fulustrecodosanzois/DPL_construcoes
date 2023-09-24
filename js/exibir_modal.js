// Função para adicionar um novo registro
function adicionarRegistro() {
    // Obtém os valores dos campos de entrada
    var nome = document.getElementById("nome").value;
    var equipe = document.getElementById("equipe").value;
    var placa = document.getElementById("placa").value;
    var modelo = document.getElementById("modelo").value;
    var local = document.getElementById("local").value;
  
    // Obtém a lista de registros do Local Storage (se existir)
    var registros = JSON.parse(localStorage.getItem("registros")) || [];
  
    // Gera um número de registro único (você pode personalizar a lógica aqui)
    var numeroRegistro = Math.floor(Math.random() * 1000);
  
    // Cria um novo registro
    var novoRegistro = {
      numero: numeroRegistro,
      nome: nome,
      equipe: equipe,
      placa: placa,
      modelo: modelo,
      local: local
    };
  
    // Adiciona o novo registro à lista de registros
    registros.push(novoRegistro);
  
    // Salva a lista de registros atualizada no Local Storage
    localStorage.setItem("registros", JSON.stringify(registros));
  
    // Limpa os campos de entrada após a adição do registro
    document.getElementById("nome").value = "";
    document.getElementById("equipe").value = "";
    document.getElementById("placa").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("local").value = "";
  
    // Atualiza a exibição da lista de registros
    atualizarListaRegistros();
  }
  
  // Função para atualizar a exibição da lista de registros
  function atualizarListaRegistros() {
    // Obtém o elemento UL onde os registros serão exibidos
    var listaRegistros = document.getElementById("lista-registros");
  
    // Obtém a lista de registros do Local Storage (se existir)
    var registros = JSON.parse(localStorage.getItem("registros")) || [];
  
    // Limpa a lista existente
    listaRegistros.innerHTML = "";
  
    // Itera sobre os registros e cria elementos HTML para exibi-los
    registros.forEach(function (registro) {
      var li = document.createElement("li");
      li.className = "py-2 list-group list-group-horizontal d-flex justify-content-center";
      li.innerHTML = `
        <li class="list-group-item border-success">N°</li>
        <li class="list-group-item border-success">${registro.numero}</li>
        <li class="list-group-item fundo_verde px-4">
          <a href="#" class="link-opacity-50-hover" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i>
          </a>
        </li>
      `;
      listaRegistros.appendChild(li);
    });
  }
  
  // Chama a função para atualizar a lista de registros quando a página carrega
  window.onload = function () {
    atualizarListaRegistros();
  };
  