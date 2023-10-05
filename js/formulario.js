// JavaScript - Formulário

let nome = document.querySelector("#nome")

function exibirNome() {
    if (nome.value == "") {
        nome.style.border = "1px solid red"
    }
    else {
        nome.style.border = "1px solid green"
    }
}

nome.addEventListener("blur", exibirNome)

// Equipe

let equipe = document.querySelector("#equipe")

function exibirEquipe() {
    if (equipe.value == "") {
        equipe.style.border = "1px solid red"
    }
    else {
        equipe.style.border = "1px solid green"
    }
}

equipe.addEventListener("blur", exibirEquipe)

// Veículo

let placa = document.querySelector("#placa")

function exibirPlaca() {
    if (placa.value == "") {
        placa.style.border = "1px solid red"
    }
    else {
        placa.style.border = "1px solid green"
    }
}

placa.addEventListener("blur", exibirPlaca)

let modelo = document.querySelector("#modelo")

function exibirModelo() {

    if (modelo.value == "") {
        modelo.style.border = "1px solid red"
    }
    else {
        modelo.style.border = "1px solid green"
    }
}

modelo.addEventListener("blur", exibirModelo)

let local = document.querySelector("#local")

function exibirLocal() {
    if (local.value == "") {
        local.style.border = "1px solid red"
    }
    else {
        local.style.border = "1px solid green"
    }
}

local.addEventListener("blur", exibirLocal)

// -----------------------------------------Validação

function validarFormulario() {

    if (nome.value === '' || equipe.value === '' || placa.value === '' || modelo.value === '' || local.value === '') {
        return false;
    }
    else {
        return true
    }
};

//------------------------------------ LocalStorage

function salvarDados() {
    var dados = {
        nome: nome.value,
        equipe: equipe.value,
        placa: placa.value,
        modelo: modelo.value,
        local: local.value,
        data: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString()
    };
    localStorage.setItem("dadosTemp", JSON.stringify(dados));
}

document.getElementById("btnEnviar").addEventListener("click", (evento) => {
    evento.preventDefault()
    if (validarFormulario()) {
        salvarDados()
        window.location.href = "desligar1.html"
    }
    else {
        alert("Por favor preencha todos os campos.");
    }

});

