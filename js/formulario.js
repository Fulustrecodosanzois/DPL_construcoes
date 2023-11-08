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



// ---------------------------- matricula equipe

const matriculas = [
    document.querySelector("#matricula1"),
    document.querySelector("#matricula2"),
    document.querySelector("#matricula3"),
    document.querySelector("#matricula4"),
    document.querySelector("#matricula5"),
    document.querySelector("#matricula6")
];

function exibirMatriculas(event) {
    const input = event.target;

    if (input.value == "") {
        input.style.border = "1px solid red";
    } else {
        input.style.border = "2px solid green";
    }
}

matriculas.forEach((input) => {
    input.addEventListener("blur", exibirMatriculas);


function limitarComprimento(event) {
    const input = event.target;
    const valor = input.value;

    if (valor.length > 5) {
        input.value = valor.slice(0, 5); // Limita a 5 caracteres
    }
}

matriculas.forEach((input) => {
    input.addEventListener("input", limitarComprimento);
});

});


// ------------------------------ PLACA    

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

// ------------------------------ EQUIPE

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


//  -------------------------- ORDEM DE SERVIÇO

let ordemServico = document.querySelector("#ordemServico")

function exibirOrdemServico() {
    if (ordemServico.value == "") {
        ordemServico.style.border = "1px solid red"
    }
    else {
        ordemServico.style.border = "1px solid green"
    }
}

ordemServico.addEventListener("blur", exibirOrdemServico)

// ------------------------------ INFORMATIVO

// function validarInformativo(){
//     if (lider.value === '' ){
//         return false;
//     }
//     else{
//         return true
//     }
// }

// document.getElementById("informativo").addEventListener("click", (evento) => {
//     evento.preventDefault()
//     if (validarInformativo()) {
//     }
//     else {
       
//     }

// });

// ------------------------------  Validação

function validarFormulario() {
    const matricula1 = document.querySelector("#matricula1")

    if (lider.value === '' || ordemServico.value === '' || equipe.value === '' || placa.value === '' || matricula1.value === '' || matriculaLider.value === '') {
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

