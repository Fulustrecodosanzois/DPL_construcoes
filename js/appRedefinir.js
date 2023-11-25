import { app, db } from "./firebaseConfig.js";
import { query, where, getDocs, collection, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("alterar").addEventListener("click", async (event) => {
        event.preventDefault();

        try {
            let matricula = document.querySelector("#matricula").value;
            let novaSenha = document.querySelector("#novaSenha").value;
            let confirmarNovaSenha = document.querySelector("#confirmarNovaSenha").value;

            if (novaSenha === confirmarNovaSenha) {
                const matriculaExists = await checkMatriculaExists(matricula);

                if (matriculaExists) {
                    await updateSenha(matricula, novaSenha);
                    alert("Senha alterada com sucesso!");

                    window.location.href = "../..";
                } else {
                    alert("Matrícula incorreta ou não existe no banco de dados.");
                }
            } else {
                alert("As senhas não coincidem.");
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

async function updateSenha(matricula, novaSenha) {
    const q = query(collection(db, "usuarios"), where("matricula", "==", matricula));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, { senha: novaSenha });
    }
}
function togglePasswordVisibility(...inputIds) {
    inputIds.forEach(inputId => {
        let senhaInput = document.querySelector(`#${inputId}`);
        let eyeIcon = document.querySelector(`#${inputId} + .fa-eye`);

        if (senhaInput.type === "password") {
            senhaInput.type = "text";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
        } else {
            senhaInput.type = "password";
            eyeIcon.classList.remove("fa-eye-slash");
            eyeIcon.classList.add("fa-eye");
        }
    });
}