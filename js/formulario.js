// JavaScript - Formulário
let nome = document.querySelector("#nome")

function exibirNome(){
    // console.log(nome.value)
    if(nome.value == ""){
        nome.style.border = "1px solid red"
    }
    else{
        nome.style.border = "1px solid green"
    }
}

nome.addEventListener("blur", exibirNome)

// Equipe
let equipe = document.querySelector("#equipe")

function exibirEquipe(){
    // console.log(equipe.value)
    if(equipe.value == ""){
        equipe.style.border = "1px solid red"
    }
    else{
        equipe.style.border = "1px solid green"
    }
}

equipe.addEventListener("blur", exibirEquipe)

// Veículo
let placa = document.querySelector("#placa")

function exibirPlaca(){
    // console.log(placa.value)
    if(placa.value == ""){
        placa.style.border = "1px solid red"
    }
    else{
        placa.style.border = "1px solid green"
    }
}

placa.addEventListener("blur", exibirPlaca)

let modelo = document.querySelector("#modelo")

function exibirModelo(){
    // console.log(modelo.value)
    if(modelo.value == ""){
        modelo.style.border = "1px solid red"
    }
    else{
        modelo.style.border = "1px solid green"
    }
}

modelo.addEventListener("blur", exibirModelo)

// LocalStorage
function salvarDados(evento) {
    evento.preventDefault()
    var nome = document.getElementById("nome").value;
    var equipe = document.getElementById("equipe").value
    var placa = document.getElementById("placa").value
    var modelo = document.getElementById("modelo").value
  
    var dados = {
      nome: nome,
      equipe: equipe,
      placa: placa,
      modelo: modelo
    };
  
    localStorage.setItem("dadosCadastro", JSON.stringify(dados));
  
  }
  
  document.getElementById("btnEnviar").addEventListener("click", salvarDados);
