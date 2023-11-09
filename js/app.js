import { app, db } from "./config-firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

    //--------------------------- VARIÁVEIS 

const formRegistro = document.querySelector("#form-registro");
const btnEnviar = document.querySelector("#btnEnviar");
const btnConfirmarModal = document.querySelector("#item");
let modalClicado = false;


    // -------------------- AUTENTICAÇÃO DO MODAL

btnConfirmarModal.addEventListener("click", () => {

    const meuModal = new bootstrap.Modal(document.getElementById("meuModal"));
    meuModal.hide();
    modalClicado = true;
});


    // -------------------- DADOS DO FORMULÁRIO

btnEnviar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    if (!modalClicado) {
        alert("Por favor, leia e confirme o botão VER INFORMATIVO.");
        return;
    }

    const lider = document.getElementById("lider").value;
    const matriculaLider = document.getElementById("matriculaLider").value;
    const placa = document.getElementById("placa").value;
    const equipe = document.getElementById("equipe").value;
    const matricula1 = document.getElementById("matricula1").value;
    const matricula2 = document.getElementById("matricula2").value;
    const matricula3 = document.getElementById("matricula3").value;
    const matricula4 = document.getElementById("matricula4").value;
    const matricula5 = document.getElementById("matricula5").value;
    const matricula6 = document.getElementById("matricula6").value;
    const ordemServico = document.getElementById("ordemServico").value;

    // ----------------------------------- Validar os campos 
    if (!lider || !matriculaLider || !placa || !equipe || !matricula1 || !ordemServico) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
    // ---------------------------------- Adicionar documento ao Firestore
    try {
        
        const docRef = await addDoc(collection(db, "registrar"), {
            lider,
            matriculaLider,
            placa,
            equipe,
            matriculas: [matricula1, matricula2, matricula3, matricula4, matricula5, matricula6],
            ordemServico,
            timestamp: new Date().toISOString(),
        });

        console.log("Documento adicionado com ID: ", docRef.id);

        // Redirecionar para outra página após o envio bem-sucedido
        window.location.href = "./desligar1.html";
    } catch (error) {
        console.error("Erro ao adicionar documento: ", error);
        alert("Ocorreu um erro. Por favor, tente novamente.");
    }
});


// --------------------------------AUTENTICAÇÕES

const lider = document.querySelector("#lider");

function exibirLider() {
    if (lider.value == "") {
        lider.style.border = "1px solid red"
    }
    else {
        lider.style.border = "1px solid green"
    }
}

lider.addEventListener("blur", exibirLider)

const matriculas = [
    document.querySelector("#matricula1"),
    document.querySelector("#matricula2"),
    document.querySelector("#matricula3"),
    document.querySelector("#matricula4"),
    document.querySelector("#matricula5"),
    document.querySelector("#matricula6"),
    document.querySelector("#matriculaLider")
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




