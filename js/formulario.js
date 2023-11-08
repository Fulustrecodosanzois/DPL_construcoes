// JavaScript - Formulário

// ------------------------ LIDER

let lider = document.querySelector("#lider")

function exibirLider() {
    if (lider.value == "") {
        lider.style.border = "1px solid red"
    }
    else {
        lider.style.border = "1px solid green"
    }
}

lider.addEventListener("blur", exibirLider)



// -------------------------MATRÍCULA LIDER

let matriculaLider = document.querySelector("#matriculaLider")

function exibirmatriculaLider() {
    if (matriculaLider.value == "") {
        matriculaLider.style.border = "1px solid red"
    }
    else {
        matriculaLider.style.border = "1px solid green"
    }
}

matriculaLider.addEventListener("blur", exibirmatriculaLider)



// matricula equipe

const matriculas = [
    document.querySelector("#matricula1"),
    document.querySelector("#matricula2"),
    document.querySelector("#matricula3"),
    document.querySelector("#matricula4"),
    document.querySelector("#matricula5"),
    document.querySelector("#matricula6")
];

function exibirMatriculas() {
    matriculas.forEach((input) => {
        if (input.value == "") {
            input.style.border = "1px solid red";
        } else {
            input.style.border = "1px solid green";
        }
    });
}

matriculas.addEventListener("blur", exibirMatriculas)
















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

    if (lider.value === '' || equipe.value === '' || placa.value === '' || modelo.value === '' || local.value === '') {
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

