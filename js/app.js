import { app, db } from "./config-firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const formRegistro = document.querySelector("#form-registro");
const btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    // Coletar dados do formulário
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

    // Validar se todos os campos estão preenchidos
    if (!lider || !matriculaLider || !placa || !equipe || !matricula1 || !ordemServico) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    try {
        // Adicionar documento ao Firestore
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




