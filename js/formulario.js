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

let local = document.querySelector(".locall")

function exibirLocal(){
    // console.log(local.value)
    if(local.value == ""){
        local.style.border = "1px solid red"
    }
    else{
        local.style.border = "1px solid green"
    }
}

local.addEventListener("blur", exibirLocal)

// Validação
function validarFormulario(){

if (nome.value === '' || equipe.value === ''|| placa.value === '' || modelo.value === ''|| local.value === ''){
    return false;
}
else{
    return true
}
};
// LocalStorage
function salvarDados() {
    var nome = document.getElementById("nome").value;
    var equipe = document.getElementById("equipe").value
    var placa = document.getElementById("placa").value
    var modelo = document.getElementById("modelo").value
    var local = document.getElementById("locall").value
  
    var dados = {
      nome: nome,
      equipe: equipe,
      placa: placa,
      modelo: modelo,
      local: local
    };
  
    localStorage.setItem("dadosCadastro", JSON.stringify(dados));
  
  }
  
  document.getElementById("btnEnviar").addEventListener("click", (evento)=>{
    evento.preventDefault()
    if(validarFormulario()){
        salvarDados()
        window.location.href="desligar1.html"
    }
    else{
        alert("Por favor preencha todos os campos.");
       
    }
    
  });

let item = document.querySelector('#item')
item.addEventListener('click', ()=>{
    if(item.checked){
        alert('sdas')
        return false
    }
    else{
        alert('dfvdfv')
        return true
    }
})
