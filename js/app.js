import { app, db } from "./config-firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Seletor do botão "Registrar"
const btnRegistrar = document.querySelector("#btnEnviar");

btnRegistrar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    // Coletar os valores dos campos do formulário no momento do clique
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
    const dados = {
        lider: lider,
        matriculaLider: matriculaLider,
        placa: placa,
        equipe: equipe,
        matriculas: JSON.stringify([matricula1, matricula2, matricula3, matricula4, matricula5, matricula6]),
        ordemServico: ordemServico,
    }

    try {
        // Adicionar documentos com gerador de id 
        const docRef = await addDoc(collection(db, "registrar"), {
            dados
        });
        console.log("Documento escrito com ID: ", docRef.id); 
        alert(dados); 
    } catch (error) {
        console.error("O seguinte erro ocorreu: " + error);
    }
});
