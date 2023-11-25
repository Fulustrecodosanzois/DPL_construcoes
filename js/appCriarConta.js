import { app, db } from "./firebaseConfig.js";
import { addDoc, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("criarConta").addEventListener("click", async () => {
        try {
            let matricula = document.querySelector("#matricula");
            let nome = document.querySelector("#nome");
            let criarSenha = document.querySelector("#criarSenha");
            let confirmarSenha = document.querySelector("#confirmarSenha");

            if (!matricula.value || !nome.value || !criarSenha.value || !confirmarSenha.value) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
                
            const matriculaExists = await checkMatriculaExists(matricula.value);

            if (matriculaExists) {
                alert('Já existe uma matrícula cadastrada com esse número.');
            } else if (criarSenha.value === confirmarSenha.value) {
                const docRef = await addDoc(collection(db, "usuarios"), {
                    matricula: matricula.value,
                    nome: nome.value,
                    senha: criarSenha.value,
                });
                alert('Usuário cadastrado com sucesso');
                console.log("Document written with ID: ", docRef.id);

                window.location.href = "../..";
            } else {
                console.error("As senhas não coincidem.");
            }
        } catch (error) {
            console.error("Ocorreu o seguinte erro: " + error);
        }
    });
});

async function checkMatriculaExists(matricula) {
    const q = query(collection(db, "usuarios"), where("matricula", "==", matricula));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
}

console.log("o caminho está correto");

